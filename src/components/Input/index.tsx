import React from "react";
import { IInputProps } from "@/types";
import * as Styled from "./input.styles";

export const Input: React.FC<IInputProps> = ({
  onChange,
  value,
  label,
  name,
  placeholder,
  style,
}) => {
  return (
    <Styled.InputWrapper style={style}>
      <span>{label}</span>
      <input
        type="text"
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </Styled.InputWrapper>
  );
};
