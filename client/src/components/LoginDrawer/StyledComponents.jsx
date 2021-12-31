import styled from "styled-components";

export const Wrapper = styled.div`
  background: #e4e3cf;
  height: 100%;
  color: var(--base-bg-color);
  box-shadow: 0 0 20px 1px #070707;
  min-width: 300px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 550px) {
    min-width: 500px;
  }
`;

export const BackgroundMist = styled.div`
  background: #4b4b4bc0;
  height: 100%;
  width: 100vw;
  z-index: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Close = styled.button`
  outline: none;
  border: 2px solid white;
  cursor: pointer;
  background: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 6px 6px 2px;
  border-radius: 50%;
  position: absolute;
  right: 100%;
  margin: 5px;
`;

export const ChangeUser = styled(Close)`
  top: 40px;
`;

export const LoginWrapper = styled.div`
  border-radius: 2px;
`;
export const SignupWrapper = styled(LoginWrapper)``;

export const Form = styled.form`
  box-shadow: 2px 2px 5px #353030;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 250px;
`;
export const FormTitle = styled.h2`
  text-align: center;
`;
export const InputWrapper = styled.div`
  margin: 15px 5px 5px 5px;
  position: relative;
  width: 100%;
`;

export const InputField = styled.input`
  padding: 7px;
  outline: none;
  border: none;
  border-radius: 2px;
  width: 95%;
  :focus {
    box-shadow: 0 0 2px 1px grey;
  }
`;

// work around to pass down variable to styled componenent. For some reason
// if we don't do it this way hasValue is not defined and no one is happy :/
//"#808080"
const TypeLabel = styled.label`
  position: absolute;
  color: ${({ error, hasValue }) =>
    error ? "#e60808" : hasValue ? "white" : "#808080"};
  z-index: 1;
  right: 5px;
  transition: 0.2s ease;
  top: ${({ error, hasValue }) => (hasValue || error ? "-18px" : "6px")};
  span {
    font-size: 11px;
    background: none;
    color: #7c0505;
    position: absolute;
    right: -3px;
    top: 25px;
  }
`;

export const Label = ({ error, hasValue, children, name }) => (
  <TypeLabel error={error.length > 0} hasValue={hasValue} htmlFor={name}>
    <span>{error[0]?.reason}</span>
    {children}
  </TypeLabel>
);

export const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 0 5px 1px #747474;
  width: 50%;
  padding: 5px;
  font-size: 16px;
  transition: 0.4s ease-in-out;
  margin-top: 5px;
  background: white;

  :hover {
    box-shadow: 0 0 2px 1px green;
    background: #135018;
    color: white;
  }
  :active {
    transform: scale(0.9);
  }
`;
