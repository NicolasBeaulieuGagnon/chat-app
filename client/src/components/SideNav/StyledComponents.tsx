import styled from "styled-components";
import { NotStyledButton } from "../../buttons/NotStyledButton";

export const Wrapper = styled.div`
  width: 75px;
  height: 100%;
  background: var(--sidebar-bg);
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Border = styled.div`
  height: 3px;
  width: 90%;
  border-radius: 4px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  width: 100%;
`;

export const Option = styled(NotStyledButton)`
  border: 2px solid black;
  font-size: 25px;
  padding: 6px 7px 3px;
  margin: 2px 2px 5px 2px;
  border-radius: 50px;
`;

interface BtnProps {
  open: boolean;
}

export const OpenButton = styled(NotStyledButton)<BtnProps>`
  position: absolute;
  font-size: 20px;
  padding: 9px 8px 5px 9px;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  background: var(--sidebar-bg);
  transition: 390ms ease;
  bottom: 7px;
  left: ${({ open }) => (open ? "70px" : "0px")};
  z-index: 1;
  svg {
    transition: 200ms ease;
    transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(180deg)")};
  }
  :hover {
    svg {
      transform: ${({ open }) =>
        open
          ? "rotate(0deg) translate(-15%)"
          : "rotate(180deg) translate(15%)"};
    }
  }
`;
