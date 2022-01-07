import styled from "styled-components";
import { NotStyledButton } from "../../buttons/NotStyledButton";

export const Wrapper = styled.form`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  padding: 5px;
  height: fit-content;
  margin-right: 75px;
`;

export const Input = styled.input`
  font-family: inherit;
  outline: none;
  border: none;
  padding-left: 20px;
  border-radius: 20px;
  height: 26px;
`;

export const Label = styled.label<{ hasValue: boolean }>`
  pointer-events: none;
  position: absolute;
  right: -25px;
  transform: translate(-50%);
  transition: 100ms ease;
  color: ${({ hasValue }) => (hasValue ? "white" : "grey")};
  bottom: ${({ hasValue }) => (hasValue ? "-13px" : "9px")};
`;

export const Submit = styled(NotStyledButton)`
  color: black;
  position: absolute;
  z-index: 2;
  right: 7px;
  top: 7px;
  font-size: 20px;
`;

export const Results = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 200px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  :hover {
    box-shadow: 0 0 5px 1px grey inset;
  }
`;

export const Result = styled.li``;

export const Link = styled(NotStyledButton)`
  font-size: 18px;
  padding: 2px;
  margin: 2px 0px;
  background: #6b3333;
  border-radius: 3px;
  transition: 200ms ease;
  :hover {
    background: #0a3f20;
    color: white;
  }
  :focus {
    background: #0a3f20;
    color: white;
  }
`;

export const CloseList = styled.button`
  position: absolute;
  cursor: pointer;
  border: 2px solid #700e0e;
  outline: 0;
  font-size: 15px;
  font-family: inherit;
  z-index: 1000;
  color: #700e0e;
  border-radius: 50%;
  padding: 0;
  height: 20px;
  width: 20px;
  top: -10px;
  right: -10px;
`;

export const ErrorMessage = styled.div`
  border-radius: 3px;
  margin: 5px 0px;
  font-size: 17px;
  span {
    font-style: italic;
    font-weight: bold;
    padding-right: 2px;
    color: #bd3107;
  }
`;
