import React from 'react';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortTextInputBox from '../LogInSignUp/ShortTextInputBox';
import SquareButton from '../../components/Home/SquareButton';
import ShortDescription from '../../components/Home/ShortDescription';
import BasicLink from '../../components/Home/BasicLink';

const SignupContainer = props => {
  return (
    <div className="signup-container">
      <div className="signup-upper-content">
        <PreviewTitle title={"Sign up"}/>
        <ShortTextInputBox
          cols={"40"}
          rows={"2"}
          placeholder={"Name"}
        />
        <ShortTextInputBox
          cols={"40"}
          rows={"2"}
          placeholder={"Email"}
        />
        <ShortTextInputBox
          cols={"40"}
          rows={"2"}
          placeholder={"Password"}
        />
        <SquareButton title={"Create account"} link={"/"}/>
      </div>
      <div className="signup-bottom-content">
        <div className="signup-link-container">
          <ShortDescription description={"Already have an account?"}/>
          <BasicLink link={"/login"} title={"Log in"}/>
        </div>
      </div>
    </div>
  );
}

export default SignupContainer;