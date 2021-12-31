import { createContext, useEffect, useState } from "react";
import { UserContextInterface, userProp } from "./ContextInterfaces";

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
    const _id = localStorage.getItem("chatUserId");
    if (_id) {
      fetch(`/users/_id/${_id}`).then((res) =>
        res.json().then(({ data, error }) => {
          if (data) {
            changeLoggedIn();
            setUser(data);
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
