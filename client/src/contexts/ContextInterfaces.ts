interface messageInt {
  author: { _id: string; username: string };
  message: string;
  sent: string;
  _id: string;
}
interface chatProps {
  name: string;
  _id: string;
  created: string;
  messages: Array<messageInt>;
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
