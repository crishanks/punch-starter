import React, { Component } from 'react';

//Components
import CategoryBar from './CategoryBar';
import FeaturedProject from './FeaturedProject';
import Recommended from './Recommended';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <CategoryBar/>
        <div className="featured-recommended-container">
          <div className="featured-project-container">
            <FeaturedProject/>
          </div>
          <div className="recommended-container">
            <Recommended/>
          </div>
        </div>
      </div>
    );
  }
}