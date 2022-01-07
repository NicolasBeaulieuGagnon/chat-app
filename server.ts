const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const PORT = 8000;

import {
  addMessage,
  createNewChat,
  getChatById,
} from "./handlers/chatHandlers";
import {
  friendRequestDecision,
  sendFriendRequest,
} from "./handlers/friendHandlers";
import {
  addNewUser,
  getUserByCredentials,
  getUserById,
  getUserBySearch,
} from "./handlers/userHandlers";
import { SocketInt } from "./serverInterface";

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"],
  },
});

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get(`/users/_id/:_id`, getUserById);
app.get(`/users-search/:username`, getUserBySearch);
app.get(`/users/:username/:password`, getUserByCredentials);
app.patch(`/users/friendRequestDecision/:_id/:adding`, friendRequestDecision);
app.patch(`/users/friendRequest/:_id`, sendFriendRequest);
app.post(`/users`, addNewUser);

app.get(`/chats/:_id`, getChatById);
app.post(`/chats`, createNewChat);
app.patch(`/chats/:_id`, addMessage);

interface messageInterface {
  message: {
    author: { _id: string; username: string };
    message: string;
    sent: string;
    _id: string;
  };
  chatId: string;
}

interface loggedInInterface {
  _id: string;
}

io.on("connection", (socket: SocketInt) => {
  console.log(`user connected with socket id ${socket.id}`);
  socket.on("message", ({ message, chatId }: messageInterface) => {
    io.emit("message", { message, chatId });
  });

  socket.on("loggedIn", ({ _id }: loggedInInterface) => {
    io.emit("loggedIn", { _id });
  });
});

server.listen(PORT, () => {
  console.log(`listening with io server on port ${PORT}`);
});
