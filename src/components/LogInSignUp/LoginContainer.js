import React from 'react';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortTextInputBox from '../LogInSignUp/ShortTextInputBox';
import SquareButton from '../../components/Home/SquareButton';
import ShortDescription from '../../components/Home/ShortDescription';
import BasicLink from '../../components/Home/BasicLink';

const LoginContainer = props => {
  return (
    <>
      <PreviewTitle title={"Log in"}/>
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
      <SquareButton title={"Log in"} link={"/"}/>
      <ShortDescription description={"New to Kickstarter?"}/>
      <BasicLink link={"/signup"} title={"Sign up"}/>
      <ShortDescription description={"Punchstarter is protected by Google Privacy Policy and Terms of Service apply."}/>
    </>
  );
}

export default LoginContainer;