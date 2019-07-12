import React, { Component } from 'react';

//Components
import PreviewImage from '../components/PreviewImage';
import PreviewTitle from '../components/PreviewTitle';
import ShortDescription from '../components/ShortDescription';
import AuthorInfoTag from '../components/AuthorInfoTag';

export default class ProjectPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-preview-container">
        <PreviewImage image={"https://ksr-static.imgix.net/uu20wnrf-wigbold.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=9629dbebfa0ad1aa190ffe845cc2aea8"}/>
        <PreviewTitle title={"The Wigbold Chef's Knife"}/>
        <ShortDescription description={"Slice and dice like a Michelin star chef."}/>
        <AuthorInfoTag authorName={"Crowd Cookware"}/>
      </div>
    );
  }
}