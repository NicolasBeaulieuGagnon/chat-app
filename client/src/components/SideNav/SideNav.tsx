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

const SideNav = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(UserContext);

  const openCreateChatModal = () => {
    const chatModal: any = document.getElementById("newChatModal");
    chatModal.style.opacity = "1";
    chatModal.style.visibility = "visible";
  };

  useEffect(() => {
    if (isLoggedIn) {
      setOpenSideBar(true);
    }
  }, [isLoggedIn]);
  return (
    <>
      <CreateNewChat />
      <DrawerTransition state={openSideBar} delay={0} side="left">
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
