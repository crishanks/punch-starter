import React from 'react';
import './App.css';

//React Router
import { Switch, Route } from 'react-router-dom';

//Components
import Home from '../src/containers/Home';
import HeaderBar from '../src/containers/HeaderBar';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
