export interface UsersRetrieveInt {
  users: Array<string>;
  client: { db: Function };
}
export interface ChatRetrieveInt {
  chats: Array<string>;
  client: { db: Function };
}

export interface createChatInt {
  body: {
    participants: Array<string>;
    message: string;
    author: { _id: string; username: string };
  };
}

export interface addingChatIdInt {
  _id: string;
  participants: Array<string>;
  client: { db: Function };
}

export interface addingMessageInt {
  body: {
    message: string;
    author: { _id: string; username: string };
  };
  params: {
    _id: string;
  };
}

export interface chatObjectInt {
  _id: string;
  created: string;
  participants: Array<string>;
  messages: Array<object>;
  name: string;
}

export interface populateParticipantsInt {
  chats: Array<chatObjectInt>;
  client: { db: Function };
}
