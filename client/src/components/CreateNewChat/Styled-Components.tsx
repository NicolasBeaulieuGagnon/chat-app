import styled from "styled-components";
import { NotStyledButton } from "../../buttons/NotStyledButton";

export const BgWrapper = styled.div`
  cursor: default;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  transition: 200ms ease;
  align-items: center;
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
`;

export const CreateChatModal = styled.div`
  position: relative;
  background: #555353;
  display: flex;
  flex-direction: column;
  form {
    font-size: 15px;
    width: auto;
  }
  color: white;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 0 5px 1px rgb(255, 255, 255, 0.2);
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 3px;
  background: rgb(0, 0, 0, 0.3);
`;

export const Participants = styled.ul`
  align-self: start;
  font-size: 16px;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Participant = styled.li`
  text-align: start;
  margin: 11px 0px 2px;
  padding: 5px;
  background: white;
  color: black;
  border-radius: 2px;
  position: relative;
`;

export const Remove = styled(NotStyledButton)`
  position: absolute;
  top: -6px;
  right: -8px;
  font-weight: bold;
  border-radius: 50px;
  padding-bottom: 1px;
  box-shadow: 0 0 0 2px black;
  height: 15px;
  font-size: 12px;
  width: 15px;
  background: #490909;
  transition: 100ms ease;
  color: white;
  :hover {
    background: #c00b0b;
    color: black;
  }
`;

export const MessageInput = styled.textarea`
  font-family: inherit;
  font-size: inherit;
  height: 100px;
  width: 300px;
  margin: 10px 20px;
  padding: 10px;
  resize: none;
  outline: none;
  background: rgb(220, 220, 220);
  border-radius: 3px;
  box-shadow: 0 0 8px 1px #353333;
`;

export const Submit = styled.button`
  cursor: pointer;
  font-family: inherit;
  outline: none;
  border: none;
  border-radius: 2px;
  padding: 10px 18px;
  box-shadow: 0 0 4px green;
  transition: 200ms ease;
  background: #034b15;
  color: white;
  :disabled {
    cursor: not-allowed;
    background: #3b1a1a;
    color: grey;
    box-shadow: 0 0 0 green;
    :hover {
      background: #3b1a1a;
      color: grey;
      box-shadow: 0 0 0 green;
    }
  }
  :hover {
    box-shadow: 0 0 10px 5px green;
    background: #0cb135;
    color: black;
  }
  :focus {
    border: 2px solid #0cb135;
  }
  :active {
    box-shadow: 0 0 10px 5px green;
    background: #0cb135;
    color: black;
    transform: scale(0.9);
  }
`;

export const SmallChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 5px 0px;
  background: none;
`;

export const Friends = styled(Participants)``;

export const Friend = styled(Participant)``;

export const AddFriend = styled(Remove)`
  background: #042e04;
  color: white;
  transition: 100ms ease;
  :hover {
    background: #10be10;
    color: black;
  }
`;

export const CharacterCount = styled.div`
  position: absolute;
  right: 50px;
  bottom: 65px;
  color: #8a0909;
  background: none;
  font-size: 14px;
`;
