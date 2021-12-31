interface chatProps {
  name: string;
  _id: string;
  created: string;
  messages: Array<object>;
  participants: Array<{ _id: string; username: string }>;
}

interface user {
  _id: string;
  username: string;
  password: string;
  friends: Array<object>;
  chats: Array<chatProps>;
}

export interface UserContextInterface {
  isLoggedIn: boolean;
  user: user;
  setUser: Function;
  changeLoggedIn: () => void;
}

export interface userProp {
  _id: string;
  username: string;
  password: string;
  friends: Array<object>;
  chats: Array<chatProps>;
}
