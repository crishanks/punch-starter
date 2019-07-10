import React, { Component } from 'react';

//Components
import PreviewHeader from '../components/PreviewHeader';
import PreviewImage from '../components/PreviewImage';
import PreviewDescription from '../components/PreviewDescription';
import AuthorInfoTag from '../components/AuthorInfoTag';

//DOES IT EVEN MAKE SENSE TO DO THIS?

export default class ContentPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content-preview">
        <PreviewHeader header={this.props.header}/>
        <PreviewImage image={this.props.image}/>
        <PreviewDescription 
          descriptionTitle={this.props.descriptionTitle}
          description={this.props.description}
        />
        <AuthorInfoTag authorName={this.props.authorName}/>
      </div>
    );
  }
}