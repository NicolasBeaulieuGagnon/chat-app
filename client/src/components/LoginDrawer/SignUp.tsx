import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FormInput from "./FormInput";
import {
  SignupWrapper,
  Form,
  SubmitButton,
  FormTitle,
} from "./StyledComponents";

import { ErrorArrayInt } from "./typeInterfaces";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
}

const SignUp = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<ErrorArrayInt>([]);

  const { setUser, changeLoggedIn } = useContext(UserContext);

  const submitUser = () => {
    const user = {
      username: username.toLowerCase().trim(),
      password,
      confirmPassword,
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
      fetch(`/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user }),
      }).then((res) =>
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
    <SignupWrapper>
      <Form
        onSubmit={(ev) => {
          ev.preventDefault();
          submitUser();
        }}
      >
        <FormTitle>Sign Up</FormTitle>
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
        <FormInput
          type="password"
          name="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          errors={errors}
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </SignupWrapper>
  );
};

export default SignUp;
