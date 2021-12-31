import { useState } from "react";

import Login from "./Login";
import { IoIosOptions } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Wrapper, BackgroundMist, Close, ChangeUser } from "./StyledComponents";
import DrawerTransition from "../../animations/DrawerTransition";
import SignUp from "./SignUp";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import DropOut from "../../animations/DropOut";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
}

const LoginDrawer = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  const [isNewUser, setIsNewUser] = useState(
    !(localStorage.getItem("chatUserCreated") === "true")
  );
  return (
    <>
      <DrawerTransition state={isDrawerOpen} delay={100} side="right">
        <BackgroundMist></BackgroundMist>
      </DrawerTransition>
      <DrawerTransition state={isDrawerOpen} delay={0} side="right">
        <Close onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          <IoClose />
        </Close>
        <Tippy content={isNewUser ? "Login" : "Sign Up"}>
          <ChangeUser onClick={() => setIsNewUser(!isNewUser)}>
            <IoIosOptions />
          </ChangeUser>
        </Tippy>
        <Wrapper>
          <DropOut state={isNewUser}>
            <SignUp
              setIsDrawerOpen={setIsDrawerOpen}
              isDrawerOpen={isDrawerOpen}
            />
          </DropOut>
          <DropOut state={!isNewUser}>
            <Login
              setIsDrawerOpen={setIsDrawerOpen}
              isDrawerOpen={isDrawerOpen}
            />
          </DropOut>
        </Wrapper>
      </DrawerTransition>
    </>
  );
};

export default LoginDrawer;
