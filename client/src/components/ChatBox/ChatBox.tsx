import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { displayChatInitialState, displayedChat } from "./ChatBoxIntereface";
import { ChatUsers, Messages, Wrapper } from "./StyledComponents";
import Message from "./Message";
import CapitalLetter from "./CapitalLetter";
import CreateMessage from "./CreateMessage/CreateMessage";

import io from "socket.io-client";

const socket = io(`http://localhost:8000`);
const ChatBox = () => {
  const { _id } = useParams();
  const [chat, setChat] = useState<displayedChat>(displayChatInitialState);
  const [loading, setLoading] = useState(true);
  const { user, isLoggedIn } = useContext(UserContext);
  const chatPeople = chat.participants.filter(
    (partiId) => partiId.username !== user.username
  );

  useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    messageContainer?.scroll(0, messageContainer.scrollHeight);
  }, [chat]);

  useEffect(() => {
    if (isLoggedIn) {
      const filteredChat = user.chats.filter((chat) => chat._id === _id)[0];
      if (filteredChat) {
        setChat(filteredChat);
      }
      setLoading(false);
    }
  }, [_id, isLoggedIn, user]);

  if (loading) {
    return <Wrapper>Loading...</Wrapper>;
  }
  return (
    <Wrapper>
      {isLoggedIn && (
        <>
          <ChatUsers>
            {chatPeople.map(
              (person) => (
                console.log(person),
                (
                  <>
                    <CapitalLetter
                      key={person._id}
                      username={person.username}
                      color={person.color}
                    />
                  </>
                )
              )
            )}
          </ChatUsers>
          <Messages id="message-container">
            {chat.messages.map((message, index) => (
              <Message
                key={user._id + index}
                message={message}
                userId={user._id}
                participants={chat.participants}
              />
            ))}
          </Messages>
          <CreateMessage socket={socket} chat={chat} setChat={setChat} />
        </>
      )}
    </Wrapper>
  );
};

export default ChatBox;
