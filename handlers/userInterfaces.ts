export interface newUser {
  body: {
    username: string;
    password: string;
    confirmPassword: string;
  };
}

export interface addedUser {
  username: string;
  password: string;
  _id: string;
  friends: Array<string>;
  chats: Array<string>;
}

export interface credentialLogin {
  params: { username: string; password: string };
}
