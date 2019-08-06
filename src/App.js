import React, { Component } from 'react';
import '../src/sass/App.css';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import Home from '../src/containers/Home/Home';
import HeaderBar from '../src/containers/Home/HeaderBar';
import StartAProject from './containers/StartAProject/StartAProject';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/start' component={StartAProject}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
