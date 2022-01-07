interface messageInt {
  author: { _id: string; username: string };
  message: string;
  sent: string;
  _id: string;
}

export interface displayedChat {
  name: string;
  _id: string;
  created: string;
  messages: Array<messageInt>;
  participants: Array<{ _id: string; username: string; color: string }>;
}

export interface messageInterface {
  message: {
    author: { _id: string; username: string };
    message: string;
    sent: string;
    _id: string;
  };
  chatId: string;
}

export const displayChatInitialState = {
  name: "",
  _id: "",
  created: "",
  messages: [],
  participants: [],
};
