import { useContext } from "react";
import { ChatProps } from "../ChatsInterface";

import { ChatButton, HoverUsers, LetterStyle } from "./StyledComponents";
import { HiOutlineUserGroup } from "react-icons/hi";
import { UserContext } from "../../../contexts/UserContext";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ChatIcon = ({ chat }: ChatProps) => {
  const { user } = useContext(UserContext);
  const buddy = chat.participants
    .filter((partiId) => partiId._id !== user._id)[0]
    .username.split("")[0]
    .toUpperCase();
  const users = chat.participants.filter((partiId) => partiId._id !== user._id);
  return (
    <Tippy
      content={users.map((user) => (
        <HoverUsers>{user.username}</HoverUsers>
      ))}
    >
      <ChatButton>
        {chat.participants.length > 2 ? (
          <HiOutlineUserGroup />
        ) : (
          <LetterStyle>{buddy}</LetterStyle>
        )}
      </ChatButton>
    </Tippy>
  );
};

export default ChatIcon;
