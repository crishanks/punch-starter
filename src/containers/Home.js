import React, { Component } from 'react';

//Components
import CategoryBar from './CategoryBar';
import FeaturedProject from './FeaturedProject';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <CategoryBar/>
        <FeaturedProject/>
      </div>
    );
  }
}