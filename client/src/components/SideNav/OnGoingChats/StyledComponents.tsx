import styled from "styled-components";
import { NotStyledButton } from "../../../buttons/NotStyledButton";

export const Wrapper = styled.div`
  height: 100%;
  background: var(--sidebar-bg);
  color: black;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  transition: 200ms ease;
  border-radius: 5px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  :hover {
    background: rgb(0, 0, 0, 0.2);
    ::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 25px;
    }
  }
`;

export const ChatButton = styled(NotStyledButton)<{
  selectedChat: boolean;
  color: string;
}>`
  border: 2px solid black;
  font-size: 25px;
  padding: 6px 7px 3px;
  margin: 2px 20% 5px;
  border-radius: 17px;
  transition: 200ms ease;
  background: ${({ color }) => color};
  span {
    color: white;
  }
  :hover {
    border-radius: 10px;
  }
`;

export const LetterStyle = styled.span`
  background: none;
  color: black;
  font-weight: bold;
  padding: 0px 3px 3px;
  display: inline-block;
`;
export const HoverUsers = styled.span`
  background: none;
  color: white;
  display: flex;
  gap: 1px;
`;
