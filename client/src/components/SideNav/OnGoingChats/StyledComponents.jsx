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
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: auto;
`;

export const ChatButton = styled(NotStyledButton)`
  border: 2px solid black;
  font-size: 25px;
  padding: 6px 7px 3px;
  margin: 2px 20% 5px;
  border-radius: 17px;
  transition: 200ms ease;
  background: ${`rgb(
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    0.4
  );`};
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
