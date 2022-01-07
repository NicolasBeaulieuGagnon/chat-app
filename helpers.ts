import {
  addingChatIdInt,
  ChatRetrieveInt,
  UsersRetrieveInt,
  populateParticipantsInt,
  chatObjectInt,
} from "./helperInterfaces";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const MongoConnect = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("connected");
  return client;
};

export const MongoDisconnect = async (client: { close: Function }) => {
  await client.close();
  console.log("disconnected");
};

export const testPassword = (password: string, confirmPassword: string) => {
  const errors = [];
  if (password.length < 5) {
    errors.push({ reason: "too short", type: "password" });
  }
  if (confirmPassword.length < 5) {
    errors.push({ reason: "too short", type: "confirmPassword" });
  }
  if (password !== confirmPassword) {
    errors.push({ reason: "did not match", type: "password" });
    errors.push({ reason: "did not match", type: "confirmPassword" });
  }

  return errors;
};

export const retrieveUsersById = async ({
  users,
  client,
}: UsersRetrieveInt) => {
  const usersArray = await client
    .db("chat-app")
    .collection("users")
    .find(
      { _id: { $in: users } },
      {
        projection: {
          username: 1,
          _id: 1,
          color: 1,
        },
      }
    )
    .toArray();
  return usersArray;
};

const populateChatParticipants = async ({
  chats,
  client,
}: populateParticipantsInt) => {
  let promises: Array<object> = [];

  chats.forEach((chat) => {
    let participants = chat.participants;
    promises.push(
      client
        .db("chat-app")
        .collection("users")
        .find(
          { _id: { $in: participants } },
          { projection: { username: 1, _id: 1, color: 1 } }
        )
        .toArray()
    );
  });
  const participantsData = await Promise.all(promises);

  return chats.map((chat, index) => {
    return { ...chat, participants: participantsData[index] };
  });
};

export const retreiveChats = async ({ chats, client }: ChatRetrieveInt) => {
  const chatsArray = await client
    .db("chat-app")
    .collection("chats")
    .find({ _id: { $in: chats } })
    .toArray();

  return await populateChatParticipants({ chats: chatsArray, client });
};

export const addChatIdToPraticipants = async ({
  _id,
  participants,
  client,
}: addingChatIdInt) => {
  let promises: Array<object> = [];
  participants.forEach((participantId) => {
    promises.push(
      client
        .db("chat-app")
        .collection("users")
        .updateOne({ _id: participantId }, { $addToSet: { chats: _id } })
    );
  });
  await Promise.all(promises);
};

export const findIfNewChat = async (
  participants: Array<string>,
  client: { db: Function }
) => {
  const foundChats = await client
    .db("chat-app")
    .collection("chats")
    .find({ participants: { $all: participants } })
    .toArray();
  const filterChats = foundChats.filter((chat: chatObjectInt) => {
    let chatExists = false;
    chat.participants.forEach((chatPartiId: string) => {
      if (participants.includes(chatPartiId)) {
        chatExists = true;
      }
    });
    if (chatExists && chat.participants.length === participants.length) {
      return chat;
    }
  });
  return filterChats;
};
