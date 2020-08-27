import React from "react";
import "./customButton.style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google__signIn" : ""
      } customButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
