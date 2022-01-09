import React from "react";

import IInputProps from "../../../Core/Interfaces/IInputProps"

const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={"bg-white shadow-md rounded" + className}
    />
  );
};

export default Input;
