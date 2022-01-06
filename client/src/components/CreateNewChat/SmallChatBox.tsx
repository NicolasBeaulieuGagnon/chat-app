import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import {
  MessageInput,
  SmallChatWrapper,
  Submit,
  CharacterCount,
} from "./Styled-Components";
import io from "socket.io-client";

const socket: {
  emit: Function;
  on: Function;
} = io(`http://localhost:8000`);

interface Props {
  participants: Array<{ _id: string; username: string }>;
  setParticipants: Function;
  closeModal: Function;
}

const SmallChatBox = ({ participants, setParticipants, closeModal }: Props) => {
  const { user, refetchUser } = useContext(UserContext);
  const [messageCount, setMessageCount] = useState(0);
  const [message, setMessage] = useState("");
  const [creatingMessage, setCreatingMessage] = useState(false);
  const navigate = useNavigate();
  const maxCharacters = 300;

  const createChat = () => {
    setCreatingMessage(true);
    let sentParti = participants.map((parti) => parti._id);
    sentParti.push(user._id);
    fetch(`/chats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        participants: sentParti,
        message,
        author: { _id: user._id, username: user.username },
      }),
    }).then((res) =>
      res.json().then(({ data, message }) => {
        //chat created
        //message added
        setCreatingMessage(false);
        closeModal();
        setMessage("");
        setParticipants([]);
        if (message === "message added") {
          socket.emit("message", {
            message: data.newMessage,
            chatId: data._id,
          });
        } else {
          refetchUser();
        }
        navigate(`/chat/${data._id}`);
      })
    );
  };

  useEffect(() => {
    if (message.length === 0) {
    }
    setMessageCount(maxCharacters - message.length);
  }, [message]);

  return (
    <SmallChatWrapper>
      <MessageInput
        value={message}
        onChange={(ev) => {
          ev.stopPropagation();
          ev.preventDefault();
          setMessage(ev.target.value);
        }}
      />
      <CharacterCount>{messageCount < 50 && messageCount}</CharacterCount>

      <Submit
        disabled={
          message.trim().length <= 0 ||
          participants.length <= 0 ||
          creatingMessage
        }
        onClick={createChat}
      >
        {creatingMessage ? "Creating..." : "Create"}
      </Submit>
    </SmallChatWrapper>
  );
};

export default SmallChatBox;
