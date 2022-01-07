import { MongoConnect, MongoDisconnect } from "../helpers";
import { AddFriendInt, FriendDecision } from "./friendInterfaces";

const { v4: uuidv4 } = require("uuid");

export const sendFriendRequest = async (req: AddFriendInt, res: any) => {
  const client = await MongoConnect();

  try {
    const checkIfFriends = await client
      .db("chat-app")
      .collection("users")
      .findOne({ _id: req.body._id });

    if (checkIfFriends.friends.includes(req.params._id)) {
      res.status(400).json({ status: 400, message: "already friends." });
      return;
    }
    const result = await client
      .db("chat-app")
      .collection("users")
      .updateOne(
        { _id: req.params._id },
        {
          $addToSet: {
            friendRequests: {
              username: req.body.username,
              friendId: req.body._id,
              _id: uuidv4(),
            },
          },
        }
      );

    if (result.modifiedCount > 0) {
      res.status(200).json({ status: 200, message: "request sent" });
      return;
    }
    if (result.matchedCount > 0) {
      res.status(400).json({ status: 400, message: "already sent request" });
      return;
    }

    res.status(404).json({ status: 404, message: "user not found." });
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    await MongoDisconnect(client);
  }
};

export const friendRequestDecision = async (req: FriendDecision, res: any) => {
  const client = await MongoConnect();

  try {
    const { _id: friendId, requestId, username } = req.body;
    const { _id: userId, adding } = req.params;
    if (adding === "true") {
      await client
        .db("chat-app")
        .collection("users")
        .updateOne(
          { _id: userId },
          {
            $addToSet: { friends: friendId },
            $pull: { friendRequests: { _id: requestId, username, friendId } },
          }
        );
      await client
        .db("chat-app")
        .collection("users")
        .updateOne(
          { _id: friendId },
          {
            $addToSet: { friends: userId },
            $pull: { friendRequests: { _id: requestId, username, friendId } },
          }
        );
      res.status(200).json({ status: 200, message: "added friend!" });
    } else {
      await client
        .db("chat-app")
        .collection("users")
        .updateOne(
          { _id: userId },
          {
            $pull: { friendRequests: { _id: requestId, username, friendId } },
          }
        );
      res.status(200).json({ status: 200, message: "declined friend" });
    }
  } catch (err) {
    console.log("ERROR", err);
    res.status(500).json({ status: 500, message: "Error" });
  } finally {
    await MongoDisconnect(client);
  }
};
