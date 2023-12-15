import { useState } from "react";
import React from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    name,
    text,
    value,
    type,
    required,
    options,
    label,
    errorMessage,
    onChange,
    id,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  if (type === "select") {
    return (
      <div className="formInput">
        <label>{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div className="formInput">
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
};

export default FormInput;
