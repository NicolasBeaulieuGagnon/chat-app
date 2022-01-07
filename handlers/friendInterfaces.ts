export interface AddFriendInt {
  body: {
    _id: string;
    username: string;
  };
  params: {
    _id: string;
  };
}

export interface FriendDecision {
  body: {
    requestId: string;
    _id: string;
    username: string;
  };
  params: {
    _id: string;
    adding: string;
  };
}
