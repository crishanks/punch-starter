import React, { Component } from 'react';

//Components
import CategoryBar from './CategoryBar';
import FeaturedProject from './FeaturedProject';
import Recommended from './Recommended';
import SquareButton from '../components/SquareButton';
import FreshFavorites from './FreshFavorites';
import FeaturedAuthors from './FeaturedAuthors';

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
        <div className="discover-container">
          <h3>Discover the best and brightest projects on Kickstarter</h3>
          <p>Sign up to receive our weekly Project We Love newsletter.</p>
          <div className="square-button">
            <SquareButton title={"Subscribe"}/>
          </div>
        </div>
        <div className="fresh-favorites-container">
          <FreshFavorites/>
        </div>
        <div className="featured-authors-container">
          <FeaturedAuthors publicationBlurb={true}/>
        </div>
      </div>
    );
  }
}