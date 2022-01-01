import {
  MessageAuthor,
  MessageWrapper,
  RecievedAuthor,
  RecievedMessage,
  SentMessage,
} from "./StyledComponents";
import TimeSent from "./TimeSent";

interface Props {
  message: {
    message: string;
    _id: string;
    author: { _id: string; username: string };
    sent: string;
  };
  userId: string;
  participants: Array<{ _id: string; username: string }>;
}

const Message = ({ message, userId, participants }: Props) => {
  let authorName = participants.filter(
    (parti) => parti._id === message.author._id
  )[0].username;

  return message.author._id === userId ? (
    <RecievedMessage>
      <RecievedAuthor>{authorName}</RecievedAuthor>
      <MessageWrapper>{message.message}</MessageWrapper>
      <TimeSent time={message.sent} />
    </RecievedMessage>
  ) : (
    <SentMessage>
      <MessageAuthor>{authorName}</MessageAuthor>
      <MessageWrapper>{message.message}</MessageWrapper>
      <TimeSent time={message.sent} />
    </SentMessage>
  );
};

export default Message;
