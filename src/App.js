import React from 'react';
import './App.css';

//React Router
import { Switch, Route } from 'react-router-dom';

//Components
import Home from '../src/containers/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
