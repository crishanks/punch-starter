import React, { Component } from 'react';

//Components
import SectionHeader from '../components/SectionHeader';
import PreviewImage from '../components/PreviewImage';
import ShortDescription from '../components/ShortDescription';
import PercentFunded from '../components/PercentFunded';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ProjectPreview from './ProjectPreview';

export default class Recommended extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="recommended-container">
        <SectionHeader header={"recommended"}/>
        <ProjectPreview
          image={"https://ksr-ugc.imgix.net/assets/025/121/443/7899f0ae541e4796a7f5bee023456302_original.png?ixlib=rb-2.1.0&crop=faces&w=560&h=315&fit=crop&v=1557769029&auto=format&frame=1&q=92&s=eb5ec269ccbaaac8d012d615853f4eeb"}
          title={"DopeKicks - The 1st waterproof hemp shoes"}
          percentage={"2,153%"}
          authorName={"DopeKicks"}
        />
        <FontAwesomeIcon className="heart-icon" icon={faHeart}/>
      </div>
    );
  }
}