const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const PORT = 8000;

import { addMessage, createNewChat } from "./handlers/chatHandlers";
import {
  addNewUser,
  getUserByCredentials,
  getUserById,
} from "./handlers/userHandlers";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get(`/users/_id/:_id`, getUserById);
app.get(`/users/:username/:password`, getUserByCredentials);
app.post(`/users`, addNewUser);
app.post(`/chats`, createNewChat);
app.patch(`/chats/:_id`, addMessage);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});
