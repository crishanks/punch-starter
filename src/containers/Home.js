import React, { Component } from 'react';

//Components
import CategoryBar from './CategoryBar';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <CategoryBar/>
        <div>home</div>
      </div>
    );
  }
}