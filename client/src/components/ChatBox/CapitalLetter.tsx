import { Letter, LetterWrapper, User } from "./StyledComponents";

interface Props {
  username: string;
}

const CapitalLetter = ({ username }: Props) => {
  const letter = username.split("")[0].toUpperCase();
  const restOfWord = username
    .split("")
    .filter((ltr, index) => index !== 0)
    .join("")
    .replace(",", "");
  return (
    <LetterWrapper>
      <Letter>{letter}</Letter>
      <User>{restOfWord}</User>
    </LetterWrapper>
  );
};

export default CapitalLetter;
