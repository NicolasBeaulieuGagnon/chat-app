import { useEffect, useState } from "react";
import { InputWrapper, InputField, Label } from "./StyledComponents";

interface Props {
  type: string;
  name: string;
  value: string;
  setValue: Function;
  errors: Array<any>;
}

const FormInput = ({ type, name, value, setValue, errors }: Props) => {
  const [hasValue, setHasValue] = useState(false);
  useEffect(() => {
    if (value.length > 0) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  }, [value]);
  return (
    <InputWrapper>
      <InputField
        type={type}
        id={type}
        value={value}
        onChange={(ev) => setValue(ev.target.value.trim())}
      />
      <Label
        error={errors.filter(
          (err) =>
            err.type.toLowerCase() === name.replace(" ", "").toLowerCase()
        )}
        hasValue={hasValue}
        name={name}
      >
        {name}
      </Label>
    </InputWrapper>
  );
};

export default FormInput;
