import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import Chats from "./OnGoingChats/Chats";
import DrawerTransition from "../../animations/DrawerTransition";
import { Wrapper, Options, Border, Option } from "./StyledComponents";

import { FaHome, FaPlus } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import OpenSideNav from "./OpenSideNav";
import { useNavigate } from "react-router-dom";
import CreateNewChat from "../CreateNewChat/CreateNewChat";

interface Props {
  openSideBars: boolean;
  openingSideBars: Function;
  closingSideBars: Function;
}

const SideNav = ({ openSideBars, openingSideBars, closingSideBars }: Props) => {
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) {
      openingSideBars();
    } else {
      closingSideBars();
    }
  }, [isLoggedIn]);

  const openCreateChatModal = () => {
    const chatModal: any = document.getElementById("newChatModal");
    chatModal.style.opacity = "1";
    chatModal.style.visibility = "visible";
  };

  return (
    <>
      <CreateNewChat />
      <DrawerTransition state={openSideBars} delay={0} side="left">
        <Wrapper>
          <Options>
            <Option
              onClick={() => {
                navigate("/");
              }}
            >
              <FaHome />
            </Option>
            <Option onClick={openCreateChatModal}>
              <FaPlus />
            </Option>
            <Border />
          </Options>
          <Chats />
          <Options>
            <Border />
            <Option>
              <BsGear />
            </Option>
          </Options>
        </Wrapper>
      </DrawerTransition>
      <OpenSideNav
        openSideBars={openSideBars}
        openingSideBars={openingSideBars}
        closingSideBars={closingSideBars}
      />
    </>
  );
};

export default SideNav;
