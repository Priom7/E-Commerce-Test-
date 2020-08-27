import React from "react";
import { auth } from "../../firebase/firebase";
import "./signIn.style.scss";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../button/customButton.component";
import { signInWithGoogle } from "../../firebase/firebase";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='signIn'>
        <h1 className='signIn__title'>
          {" "}
          I already have an account
        </h1>
        <span className='signIn__subTitle'>
          Sign in with your email and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label='email'
          ></FormInput>

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='password'
          ></FormInput>
          <div className='signIn__buttons'>
            <CustomButton type='submit'>
              Sign In
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
