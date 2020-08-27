import React from "react";
import SignIn from "../../components/signIn/signIn.component";
import "./authPage.scss";
import SignUp from "../../components/signUp/signUp.component";
function AuthPage() {
  return (
    <div className='authPage'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
}

export default AuthPage;
