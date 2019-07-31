import React, { Component } from 'react';

//Components
import SectionHeader from '../../components/Home/SectionHeader';
import ProjectPreview from './ProjectPreview';

export default class FeaturedProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feature-project-component-container">
        <SectionHeader header={"featured project"}/>
        <ProjectPreview
          image={"https://ksr-static.imgix.net/uu20wnrf-wigbold.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=9629dbebfa0ad1aa190ffe845cc2aea8"}
          title={"The Wigbold Chef's Knife"}
          description={"Slice and dice like a Michelin star chef."}
          authorName={"Crowd Cookware"}
        />
      </div>
    );
  }
}
