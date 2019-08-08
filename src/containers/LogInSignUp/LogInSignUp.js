import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import LoginContainer from '../../components/LogInSignUp/LoginContainer';
import SignupContainer from '../../components/LogInSignUp/SignupContainer';

const LogInSignUp = props => {
  return (
    <div className="login-signup-container">
      <Switch>
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/signup" component={SignupContainer}/>
      </Switch>
    </div>
  );
}

export default LogInSignUp;