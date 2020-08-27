import React from "react";
import "./formInput.style.scss";

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <div className='formInput'>
      <input
        className='formInput__input'
        onChange={handleChange}
        {...otherProps}
      ></input>
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } formInput__input_label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
