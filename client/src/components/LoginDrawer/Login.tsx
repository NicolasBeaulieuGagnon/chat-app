import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FormInput from "./FormInput";
import {
  LoginWrapper,
  Form,
  SubmitButton,
  FormTitle,
} from "./StyledComponents";

import { ErrorArrayInt } from "./typeInterfaces";
interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
}
const Login = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorArrayInt>([]);

  const { setUser, changeLoggedIn } = useContext(UserContext);

  const LogginUser = () => {
    const user = {
      username,
      password,
    };
    const submitErrors: ErrorArrayInt = [];
    const userKeys = Object.keys(user);
    Object.values(user).forEach((value: string, index: number) => {
      if (value.length === 0) {
        submitErrors.push({ reason: "missing info", type: userKeys[index] });
      }
    });
    if (submitErrors.length > 0) {
      setErrors(submitErrors);
      return;
    } else {
      setErrors([]);
      fetch(`/users/${username.toLowerCase().trim()}/${password}`).then((res) =>
        res.json().then(({ data, errors }) => {
          if (errors) {
            setErrors(errors);
          }
          if (data) {
            setUser(data);
            localStorage.setItem("chatUserCreated", "true");
            localStorage.setItem("chatUserId", data._id);
            changeLoggedIn();
            setIsDrawerOpen(!isDrawerOpen);
          }
        })
      );
    }
  };

  return (
    <LoginWrapper>
      <Form
        onSubmit={(ev) => {
          ev.preventDefault();
          LogginUser();
        }}
      >
        <FormTitle>Log In</FormTitle>
        <FormInput
          type="text"
          name="Username"
          value={username}
          setValue={setUsername}
          errors={errors}
        />
        <FormInput
          type="password"
          name="Password"
          value={password}
          setValue={setPassword}
          errors={errors}
        />

        <SubmitButton>Log in</SubmitButton>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
