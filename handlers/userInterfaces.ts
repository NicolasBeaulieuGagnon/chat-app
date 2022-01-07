export interface newUser {
  body: {
    username: string;
    password: string;
    confirmPassword: string;
  };
}

export interface friendRequestInt {
  _id: string;
  username: string;
  friendId: string;
}
export interface addedUser {
  username: string;
  password: string;
  _id: string;
  friends: Array<string>;
  chats: Array<string>;
  color: string;
  friendRequests: Array<friendRequestInt>;
}

export interface credentialLogin {
  params: { username: string; password: string };
}
export interface searchInt {
  params: { username: string };
}
