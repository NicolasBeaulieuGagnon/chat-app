import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { TextArea, Wrapper, Post, CharacterCount } from "./StyledComponents";
import { BsArrowUpCircle } from "react-icons/bs";
import GrowIn from "../../../animations/GrowIn";
import Tippy from "@tippyjs/react";

interface Props {
  chat: {
    _id: string;
  };
  socket: {
    emit: Function;
    on: Function;
  };
  setChat: Function;
}

const CreateMessage = ({ chat, socket, setChat }: Props) => {
  const [message, setMessage] = useState("");
  const [messageCount, setMessageCount] = useState(0);
  const { user } = useContext(UserContext);
  const [height, setHeight] = useState(50);
  const maxCharacters = 300;
  useEffect(() => {
    if (message.length === 0) {
      setHeight(50);
    }
    setMessageCount(maxCharacters - message.length);
  }, [message]);

  useEffect(() => {
    const hittingEnter = (key: { key: string; shiftKey: boolean }) => {
      if (key.key === "Enter" && key.shiftKey === false) {
        submitPost();
      }
    };

    document.addEventListener("keypress", hittingEnter);

    return () => {
      document.removeEventListener("keypress", hittingEnter);
    };
  }, [message]);
  const submitPost = () => {
    setMessage("");
    message.trim().length > 0 &&
      fetch(`/chats/${chat._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          author: { _id: user._id, username: user.username },
        }),
      }).then((res) =>
        res.json().then(({ data }) => {
          socket.emit("message", { message: data, chatId: chat._id });
        })
      );
  };
  return (
    <Wrapper
      onSubmit={(ev) => {
        ev.preventDefault();
        submitPost();
      }}
    >
      <TextArea
        height={height}
        value={message}
        onChange={(ev) => {
          var curOverflow = ev.target.style.overflow;

          if (!curOverflow || curOverflow === "visible")
            ev.target.style.overflow = "hidden";

          var isOverflowing =
            ev.target.clientWidth < ev.target.scrollWidth ||
            ev.target.clientHeight < ev.target.scrollHeight;

          ev.target.style.overflow = curOverflow;
          if (isOverflowing && height < 125) {
            setHeight(height + 20);
          }
          setMessage(ev.target.value);
        }}
      />
      <GrowIn state={message.length > 0 && message.length < maxCharacters}>
        <>
          <Tippy content="Post">
            <Post type="submit">
              <BsArrowUpCircle />
            </Post>
          </Tippy>
          <CharacterCount>{messageCount < 50 && messageCount}</CharacterCount>
        </>
      </GrowIn>
    </Wrapper>
  );
};

export default CreateMessage;
