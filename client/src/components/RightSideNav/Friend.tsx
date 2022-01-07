import { useEffect, useState } from "react";
import { FriendWrapper, FriendButton, OnlineStatus } from "./Styled-Components";
import io from "socket.io-client";
interface Props {
  friend: { username: string; _id: string; color: string };
}

interface loggedInInterface {
  _id: string;
}

const socket = io(`http://localhost:8000`);

const Friend = ({ friend }: Props) => {
  const [online, setOnline] = useState(false);
  useEffect(() => {
    socket.on("loggedIn", ({ _id }: loggedInInterface) => {
      if (_id === friend._id) {
        setOnline(true);
      }
    });
  }, [friend]);

  return (
    <FriendWrapper>
      <OnlineStatus online={online} />
      <FriendButton color={friend.color}>
        {friend.username.split("")[0].toUpperCase()}
      </FriendButton>
    </FriendWrapper>
  );
};

export default Friend;
