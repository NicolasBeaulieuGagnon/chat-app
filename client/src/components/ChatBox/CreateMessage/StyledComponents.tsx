import styled from "styled-components";
import { NotStyledButton } from "../../../buttons/NotStyledButton";

export const Wrapper = styled.form`
  background: var(--base-bg-color);
  border: 2px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: start;
  position: relative;
`;

export const TextArea = styled.textarea<{ height: number }>`
  display: block;
  margin: 5px;
  resize: none;
  outline: none;
  height: ${({ height }) => height && `${height}px`};
  padding: 5px;
  padding-right: 50px;
  border: none;
  padding-left: 10px;
  border-radius: 10px;
  width: 100%;
  background: #d6d5d5;
  font-family: inherit;
  font-size: 18px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  :hover {
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--base-bg-color);
      border-radius: 25px;
    }
  }
`;

export const Post = styled(NotStyledButton)`
  font-size: 25px;
  transition: 200ms ease;
  :hover {
    color: #024d02;
  }
`;

export const CharacterCount = styled.div`
  position: absolute;
  right: 0;
  top: 26px;
  color: #8a0909;
  background: none;
  font-size: 14px;
`;
