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
        <PreviewImage image={this.props.image}/>
        <PreviewTitle title={this.props.title}/>
        <ShortDescription description={this.props.description}/>
        <AuthorInfoTag authorName={this.props.authorName}/>
      </div>
    );
  }
}