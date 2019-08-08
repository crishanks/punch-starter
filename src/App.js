import React from 'react';
import '../src/sass/App.css';
import { Switch, Route } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';

//Components
import Home from '../src/containers/Home/Home';
import HeaderBar from '../src/containers/Home/HeaderBar';
import StartAProject from './containers/StartAProject/StartAProject';
import LogInSignUp from './containers/LogInSignUp/LogInSignUp';

const App = () => {
  return (
    <div className="App">
      <HeaderBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/start' component={StartAProject}/>
        <Route exact path='/login' component={LogInSignUp}/>
        <Route exact path='/signup' component={LogInSignUp}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(App);
