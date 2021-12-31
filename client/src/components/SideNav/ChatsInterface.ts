export interface ChatProps {
  chat: {
    name: string;
    _id: string;
    created: string;
    messages: Array<object>;
    participants: Array<{ _id: string; username: string }>;
  };
}
