import styled from "styled-components";
import { NotStyledButton } from "../../buttons/NotStyledButton";

export const Wrapper = styled.form`
  display: flex;
  justify-content: flex-end;
  position: relative;
  height: 26px;
  width: 100%;
  padding: 5px;
`;

export const Input = styled.input`
  font-family: inherit;
  outline: none;
  border: none;
  padding-left: 20px;
  border-radius: 20px;
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
  position: absolute;
  top: 27px;
  right: 12px;
  width: 150px;
  background: white;
  color: black;
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
  padding: 13px 5px 5px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  flex-direction: column;
`;

export const Result = styled.li``;

export const Link = styled(NotStyledButton)`
  font-size: 18px;
  padding: 2px;
  margin: 2px 0px;
  background: #6b3333;
  border-radius: 20px;
  transition: 200ms ease;
  :hover {
    background: #0a3f20;
    color: white;
  }
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
