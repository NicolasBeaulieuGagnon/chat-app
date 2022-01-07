import { useContext } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { UserContext } from "../../contexts/UserContext";
import { OpenButton } from "./StyledComponents";

interface Props {
  openSideBars: boolean;
  openingSideBars: Function;
  closingSideBars: Function;
}

const OpenSideNav = ({
  openSideBars,
  openingSideBars,
  closingSideBars,
}: Props) => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      {isLoggedIn ? (
        <OpenButton
          onClick={() => {
            openSideBars ? closingSideBars() : openingSideBars();
          }}
          open={openSideBars}
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
