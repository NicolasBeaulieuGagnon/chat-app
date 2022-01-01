import { createContext, useEffect, useState } from "react";
import { UserContextInterface, userProp } from "./ContextInterfaces";

import io from "socket.io-client";
import { messageInterface } from "../components/ChatBox/ChatBoxIntereface";

const socket = io(`http://localhost:8000`);

const userDefaultState = {
  _id: "",
  username: "",
  password: "",
  friends: [],
  chats: [],
};
const defaultState = {
  isLoggedIn: false,
  changeLoggedIn: () => {},
  setUser: () => {},
  user: userDefaultState,
};
export const UserContext = createContext<UserContextInterface>(defaultState);

export const UserProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<userProp>(userDefaultState);

  const changeLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    socket.on("message", ({ message, chatId }: messageInterface) => {
      if (user.username.length > 0) {
        const userCopy = { ...user };
        const mapResult = userCopy.chats.map((chat) => {
          if (chat._id === chatId) {
            return {
              ...chat,
              messages: [...chat.messages, message],
            };
          } else {
            return chat;
          }
        });
        setUser({ ...user, chats: mapResult });
      }
    });
  }, [user]);
  useEffect(() => {
    const _id = localStorage.getItem("chatUserId");
    if (_id) {
      fetch(`/users/_id/${_id}`).then((res) =>
        res.json().then(({ data, error }) => {
          if (data) {
            setUser(data);
            changeLoggedIn();
          } else {
            console.log(error);
          }
        })
      );
    }
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, user, setUser, changeLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
