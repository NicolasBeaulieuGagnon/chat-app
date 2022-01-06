import { useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { UserContext } from "../../contexts/UserContext";
import { LoginButton, Wrapper } from "./StyledComponents";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
}

const Home = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  const { user, isLoggedIn } = useContext(UserContext);

  const sendFriendRequest = () => {};

  return (
    <Wrapper>
      {isLoggedIn ? (
        <SearchBar
          callbackFunc={sendFriendRequest}
          reason="send friend request"
        />
      ) : (
        <LoginButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          Login
        </LoginButton>
      )}
    </Wrapper>
  );
};

export default Home;
