import styled from "styled-components";
import { NotStyledButton } from "../../buttons/NotStyledButton";

export const Wrapper = styled.div`
  width: 75px;
  height: 100%;
  background: var(--sidebar-bg);
  color: black;
`;

export const Friends = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const FriendWrapper = styled.li`
  position: relative;
`;

export const FriendButton = styled(NotStyledButton)<{ color: string }>`
  border: 2px solid black;
  font-size: 25px;
  padding: 6px 7px 3px;
  margin: 5px;
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

export const OnlineStatus = styled.div<{ online: boolean }>`
  position: absolute;
  top: 3px;
  right: 5px;
  border: 1px solid black;
  background: ${({ online }) => (online ? "#07e41a" : "#949191")};
  height: 10px;
  width: 10px;
  border-radius: 25px;
`;

export const FriendsWidget = styled.div`
  padding-top: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  color: black;
`;
