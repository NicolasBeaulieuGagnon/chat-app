import {
  addChatIdToPraticipants,
  MongoConnect,
  MongoDisconnect,
  retrieveUsersById,
} from "../helpers";
import { addingMessageInt, createChatInt } from "../helperInterfaces";
const { v4: uuidv4 } = require("uuid");

export const getChatById = async (
  req: { params: { _id: string } },
  res: any
) => {
  const client = await MongoConnect();

  try {
    const result = await client
      .db("chat-app")
      .collection("chats")
      .findOne({ _id: req.params._id });

    result.participants = await retrieveUsersById({
      users: result.participants,
      client,
    });
    result
      ? res.status(200).json({ status: 200, data: result })
      : res.status(400).json({
          status: 400,
          message: "something went wrong.",
          data: result,
        });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    MongoDisconnect(client);
  }
};

export const createNewChat = async (req: createChatInt, res: any) => {
  const client = await MongoConnect();
  try {
    const _id = uuidv4();
    const newChat = {
      _id,
      created: Date(),
      participants: [...req.body.participants],
      name: "",
      messages: [
        {
          _id: uuidv4(),
          message: req.body.message,
          author: req.body.author,
          sent: Date(),
        },
      ],
    };

    const result = await client
      .db("chat-app")
      .collection("chats")
      .insertOne(newChat);
    await addChatIdToPraticipants({
      _id,
      participants: req.body.participants,
      client,
    });
    result.insertedId
      ? res.status(200).json({ status: 200, message: "chat created" })
      : res.status(400).json({
          status: 400,
          message: "something went wrong.",
          data: result,
        });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    MongoDisconnect(client);
  }
};
export const addMessage = async (req: addingMessageInt, res: any) => {
  const client = await MongoConnect();

  try {
    const newMessage = {
      _id: uuidv4(),
      author: req.body.author,
      sent: Date(),
      message: req.body.message,
    };
    const result = await client
      .db("chat-app")
      .collection("chats")
      .updateOne(
        { _id: req.params._id },
        { $addToSet: { messages: { ...newMessage } } }
      );

    result.modifiedCount > 0
      ? res
          .status(200)
          .json({ status: 200, message: "message added", data: newMessage })
      : res.status(400).json({
          status: 400,
          message: "something went wrong.",
          data: result,
        });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    MongoDisconnect(client);
  }
};

export const deleteMessage = async (res: any) => {};
export const editMessage = async (res: any) => {};
export const leaveChat = async (res: any) => {};
