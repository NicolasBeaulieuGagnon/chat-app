import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import Chats from "./OnGoingChats/Chats";
import DrawerTransition from "../../animations/DrawerTransition";
import { Wrapper, Options, Border, Option } from "./StyledComponents";

import { FaHome, FaPlus } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import OpenSideNav from "./OpenSideNav";

const SideNav = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const { user, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) {
      setOpenSideBar(true);
    }
  }, [isLoggedIn]);
  return (
    <>
      <DrawerTransition state={openSideBar} delay={0} side="left">
        <Wrapper>
          <Options>
            <Option>
              <FaHome />
            </Option>
            <Option>
              <FaPlus />
            </Option>
            <Border />
          </Options>
          <Chats />
          <Options>
            <Option>
              <BsGear />
            </Option>
          </Options>
        </Wrapper>
      </DrawerTransition>
      <OpenSideNav openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
    </>
  );
};

export default SideNav;
