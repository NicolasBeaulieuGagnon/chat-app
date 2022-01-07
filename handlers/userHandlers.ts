import {
  MongoConnect,
  MongoDisconnect,
  retreiveChats,
  retrieveUsersById,
  testPassword,
} from "../helpers";
import {
  newUser,
  addedUser,
  credentialLogin,
  searchInt,
} from "./userInterfaces";
const { v4: uuidv4 } = require("uuid");

export const addNewUser = async (req: newUser, res: any) => {
  const client = await MongoConnect();
  try {
    const db = client.db("chat-app");

    const addingUser: addedUser = {
      username: req.body.username,
      password: req.body.password,
      friends: [],
      chats: [],
      _id: uuidv4(),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      friendRequests: [],
    };

    const errors = testPassword(req.body.password, req.body.confirmPassword);

    if (errors.length) {
      res.status(400).json({ status: 404, errors });
      return;
    }

    const existingUser = await db
      .collection("users")
      .findOne({ username: req.body.username });

    if (existingUser) {
      res.status(400).json({
        status: 400,
        errors: [{ reason: "already exists", type: "username" }],
      });
      return;
    }

    const result = await db.collection("users").insertOne(addingUser);
    result.insertedId &&
      res
        .status(200)
        .json({ status: 200, data: addingUser, message: "added with success" });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    MongoDisconnect(client);
  }
};

export const getUserByCredentials = async (req: credentialLogin, res: any) => {
  const client = await MongoConnect();
  try {
    const { username, password } = req.params;
    const result = await client
      .db("chat-app")
      .collection("users")
      .findOne({ username, password });

    if (result) {
      result.friends = await retrieveUsersById({
        users: result.friends,
        client,
      });
      result.chats = await retreiveChats({
        chats: result.chats,
        client,
      });
      res.status(200).json({ status: 200, data: result });
    } else {
      res.status(404).json({
        status: 404,
        errors: [
          { reason: "wrong info", type: "username" },
          { reason: "wrong info", type: "password" },
        ],
      });
    }
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    MongoDisconnect(client);
  }
};

export const getUserBySearch = async (req: searchInt, res: any) => {
  const client = await MongoConnect();

  try {
    const result = await client
      .db("chat-app")
      .collection("users")
      .find(
        { username: { $regex: `${req.params.username}`, $options: "i" } },
        {
          projection: {
            username: 1,
            _id: 1,
          },
        }
      )
      .toArray();
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    MongoDisconnect(client);
  }
};

export const getUserById = async (
  req: { params: { _id: string } },
  res: any
) => {
  const client = await MongoConnect();
  try {
    const { _id } = req.params;
    const result = await client
      .db("chat-app")
      .collection("users")
      .findOne({ _id });

    if (result) {
      result.friends = await retrieveUsersById({
        users: result.friends,
        client,
      });
      result.chats = await retreiveChats({
        chats: result.chats,
        client,
      });
      res.status(200).json({ status: 200, data: result });
    } else {
      res.status(404).json({
        status: 404,
        error: `no user found...`,
      });
    }
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    MongoDisconnect(client);
  }
};
