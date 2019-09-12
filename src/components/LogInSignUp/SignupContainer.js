import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../../actions/userActions'

//  Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortTextInputBox from '../LogInSignUp/ShortTextInputBox';
import SquareButton from '../../components/Home/SquareButton';
import ShortDescription from '../../components/Home/ShortDescription';
import BasicLink from '../../components/Home/BasicLink';

// Routes
const CREATE_ACCOUNT_API = "http://localhost:3000/users"

const SignupContainer = props => {
  return (
    <div className="signup-container">
      <form className="signup-upper-content" onSubmit={createAccount}>
        <PreviewTitle title={"Sign up"}/>
        <ShortTextInputBox
          cols={"40"}
          rows={"2"}
          placeholder={"Name"}
          name={"name"}
          type="input"
        />
        <ShortTextInputBox
          cols={"40"}
          rows={"2"}
          placeholder={"Email"}
          name={"email"}
          type="input"
        />
        <ShortTextInputBox
          cols={"40"}
          rows={"2"}
          placeholder={"Password"}
          name={"password"}
          type="input"
        />
        <SquareButton title={"Create account"} type={"submit"}/>
      </form>
      <div className="signup-bottom-content">
        <div className="signup-link-container">
          <ShortDescription description={"Already have an account?"}/>
          <BasicLink link={"/login"} basicLinkTitle={"Log in"}/>
        </div>
      </div>
    </div>
  );
}

const createAccount = async (ev) => {
  console.log('in create account', ev.target)
  const requestParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: ev.target.name.value,
      email: ev.target.email.value,
      password: ev.target.password.value
    })
  }
  const response = await fetch(CREATE_ACCOUNT_API, requestParams)
  //redirect to home here
}


export default SignupContainer;