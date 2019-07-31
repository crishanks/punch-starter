import React from 'react';
import '../src/sass/App.css';

//React Router
import { Switch, Route } from 'react-router-dom';

//Components
import Home from '../src/containers/Home/Home';
import HeaderBar from '../src/containers/Home/HeaderBar';
import StartAProject from './containers/StartAProject/StartAProject';

function App() {
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

export default App;
