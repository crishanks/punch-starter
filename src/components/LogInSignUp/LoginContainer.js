import React from 'react';

//Redux
import { connect } from 'react-redux';
import { logIn } from '../../actions/userActions';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortTextInputBox from '../LogInSignUp/ShortTextInputBox';
import SquareButton from '../../components/Home/SquareButton';
import ShortDescription from '../../components/Home/ShortDescription';
import BasicLink from '../../components/Home/BasicLink';

const LoginContainer = props => {
  return (
    <div className="login-container">
      <div className="login-upper-content">
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
      </div>
      <div className="login-bottom-content">
        <div className="signup-link-container">
          <ShortDescription description={"New to Punchstarter?"}/>
          <BasicLink link={"/signup"} basicLinkTitle={"Sign up"}/>
        </div>
        <ShortDescription description={"Punchstarter is protected by Google Privacy Policy and Terms of Service apply."}/>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(logIn())
  }
}

export default connect(mapDispatchToProps)(LoginContainer);