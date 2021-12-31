import { useContext } from "react";
import { Wrapper } from "./StyledComponents";

import { UserContext } from "../../../contexts/UserContext";
import ChatIcon from "./ChatIcon";

const Chats = () => {
  const { user } = useContext(UserContext);

  return (
    <Wrapper>
      {user.chats.map((chat) => (
        <ChatIcon key={chat._id} chat={chat} />
      ))}
    </Wrapper>
  );
};

export default Chats;
