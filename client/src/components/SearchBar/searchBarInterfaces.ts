export interface foundUsersInt {
  _id: string;
  username: string;
  friends: boolean;
}

export interface Props {
  callbackFunc: Function;
  reason: string;
}

export interface SearchResultsInt {
  loading: boolean;
  error: boolean;
  foundUsers: Array<foundUsersInt>;
}

export const searchResultInitial = {
  loading: true,
  error: false,
  foundUsers: [],
};
