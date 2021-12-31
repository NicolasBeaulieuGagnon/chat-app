import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LoginButton, Wrapper } from "./StyledComponents";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
}

const Home = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  const { user, isLoggedIn } = useContext(UserContext);
  return (
    <Wrapper>
      {isLoggedIn ? (
        <div>Hello {user.username}</div>
      ) : (
        <LoginButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
          Login
        </LoginButton>
      )}
    </Wrapper>
  );
};

export default Home;
