import React from "react";
import SignIn from "../../components/signIn/signIn.component";
import "./authPage.scss";
import SignUp from "../../components/signUp/signUp.component";
function AuthPage() {
  return (
    <div className='authPage'>
      <div className='signIn'>
        <SignIn></SignIn>
      </div>
      <div className='signUp'>
        <SignUp></SignUp>
      </div>
    </div>
  );
}

export default AuthPage;
