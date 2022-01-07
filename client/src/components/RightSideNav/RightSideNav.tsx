import { Friends, FriendsWidget, Wrapper } from "./Styled-Components";
import DrawerTransition from "../../animations/DrawerTransition";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Friend from "./Friend";
import { Border } from "../SideNav/StyledComponents";

interface Props {
  openSideBars: boolean;
}

const RightSideNav = ({ openSideBars }: Props) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <DrawerTransition state={openSideBars} delay={0} side="right">
        <Wrapper>
          {user.friends.length > 0 && (
            <FriendsWidget>
              Friends
              <Border />
              <Friends>
                {user.friends.map((friend) => (
                  <Friend friend={friend} />
                ))}
              </Friends>
            </FriendsWidget>
          )}
        </Wrapper>
      </DrawerTransition>
    </>
  );
};

export default RightSideNav;
