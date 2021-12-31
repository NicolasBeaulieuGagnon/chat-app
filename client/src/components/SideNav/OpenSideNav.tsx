import { useContext } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { UserContext } from "../../contexts/UserContext";
import { OpenButton } from "./StyledComponents";

interface Props {
  openSideBar: boolean;
  setOpenSideBar: Function;
}

const OpenSideNav = ({ openSideBar, setOpenSideBar }: Props) => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      {isLoggedIn ? (
        <OpenButton
          onClick={() => setOpenSideBar(!openSideBar)}
          open={openSideBar}
        >
          <BsArrowBarLeft />
        </OpenButton>
      ) : (
        <div />
      )}
    </>
  );
};

export default OpenSideNav;
