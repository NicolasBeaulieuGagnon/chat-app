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

interface FriendsObject {
  _id: string;
  username: string;
}

interface user {
  _id: string;
  username: string;
  password: string;
  friends: Array<FriendsObject>;
  chats: Array<chatProps>;
}

export interface UserContextInterface {
  isLoggedIn: boolean;
  user: user;
  setUser: Function;
  changeLoggedIn: () => void;
  refetchUser: Function;
}

export interface userProp {
  _id: string;
  username: string;
  password: string;
  friends: Array<FriendsObject>;
  chats: Array<chatProps>;
}
