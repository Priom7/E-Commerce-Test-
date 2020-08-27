import React from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../button/customButton.component";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase";

import "./signUp.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("Password didn't matched...");
      return;
    }

    try {
      const {
        user,
      } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName,
      });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div className='signUp'>
        <h2 className='signUp__Title'>
          I don't have an account
        </h2>
        <span className='signUp__subTitle'>
          Sign up with your email and password
        </span>

        <form
          className='signUp__form'
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          ></FormInput>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          ></FormInput>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          ></FormInput>
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          ></FormInput>

          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
