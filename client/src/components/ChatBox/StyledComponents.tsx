import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  margin-right: 75px;
  margin-left: 75px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 25px;
  background: rgb(255, 255, 255, 0.3);
`;

export const ChatUsers = styled.div`
  width: 100%;
  display: flex;
  background: rgb(10, 10, 10, 0.4);
  justify-content: start;
  align-content: center;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border: 2px solid black;
  overflow-x: auto;
`;

export const User = styled.span`
  background: none;
  font-size: 20px;
`;

export const Letter = styled.span`
  background: none;
  color: white;
  padding: 0px 0px 3px 3px;
  display: inline-block;
`;
export const LetterWrapper = styled.div<{ color: string }>`
  border: 2px solid black;
  font-size: 25px;
  padding: 6px 7px 3px;
  margin: 5px 5px 3px;
  border-radius: 17px;
  transition: 200ms ease;
  background: ${({ color }) => color};
  text-shadow: 0 0 4px black;
`;

export const Messages = styled.div`
  padding-bottom: 20px;
  width: 100%;
  border-left: 2px solid black;
  border-right: 2px solid black;
  height: calc(100% - 250px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 25px;
  }
`;

export const MessageWrapper = styled.div`
  background: none;
`;
export const SentMessage = styled.div`
  position: relative;
  background: #5a5ad1;
  margin: 5px 5px 2px;
  padding: 5px 5px 5px;
  border-radius: 5px;
  box-shadow: 0 0 13px 1px black;
  max-width: 300px;
`;
export const RecievedMessage = styled(SentMessage)`
  align-self: end;
  background: #706f6f;
  text-align: end;
`;
export const MessageAuthor = styled.div`
  color: white;
  background: inherit;
  text-shadow: 1px 1px 3px black;
  padding-bottom: 5px;
`;

export const RecievedAuthor = styled(MessageAuthor)`
  left: revert;
  right: 5px;
`;

export const Time = styled.span`
  background: none;
  font-size: 10px;
`;
