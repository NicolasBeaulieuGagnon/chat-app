import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ChatProps } from "../ChatsInterface";

import { ChatButton, HoverUsers, LetterStyle } from "./StyledComponents";
import { HiOutlineUserGroup } from "react-icons/hi";
import { UserContext } from "../../../contexts/UserContext";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ChatIcon = ({ chat }: ChatProps) => {
  const { _id } = useParams();
  const { user } = useContext(UserContext);
  const buddy = chat.participants
    .filter((partiId) => partiId._id !== user._id)[0]
    .username.split("")[0]
    .toUpperCase();
  const users = chat.participants.filter((partiId) => partiId._id !== user._id);

  const navigate = useNavigate();
  return (
    <Tippy
      content={users.map((user) => (
        <HoverUsers key={user._id}>{user.username}</HoverUsers>
      ))}
    >
      <ChatButton
        color={chat.color}
        selectedChat={chat._id === _id}
        onClick={() => {
          navigate(`/chat/${chat._id}`);
        }}
      >
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
