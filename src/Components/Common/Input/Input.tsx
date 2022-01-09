import React from "react";

import { Field, ErrorMessage } from "formik";

import IInputProps from "../../../Core/Interfaces/IInputProps";

const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  Icon,
  name,
}): JSX.Element => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <div className="bg-white w-full outline-none text-right rounded-md shadow-lg flex">
          <input
            name={name}
            type={type}
            onChange={onChange}
            required
            placeholder={placeholder}
            value={meta.value}
            dir="ltr"
            className={`w-full rounded-md placeholder:text-gray-500 ${className}`}
          />
          <label className={`text-gray-500 flex items-center mr-3 text-lg `}>
            {Icon}
          </label>
          <ErrorMessage name={name}>
            {(msg: string) => (
              <p className="text-danger m-0 pt-1 text-sm font-myriad">{msg}</p>
            )}
          </ErrorMessage>
        </div>
      )}
    </Field>
  );
};

export default Input;
