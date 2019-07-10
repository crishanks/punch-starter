import React, { Component } from 'react';

//Components
import PreviewHeader from '../components/PreviewHeader';
import PreviewImage from '../components/PreviewImage';
import PreviewDescription from '../components/PreviewDescription';
import AuthorInfoTag from '../components/AuthorInfoTag';

export default class ContentPreview extends Component {
  constructor(props) {
    super(props)
  }

  renderHeader() {
    return this.props.header ? <PreviewHeader header={this.props.header}/> : null
  }

  renderImages() {
    return this.props.images.map(image => {
      return <PreviewImage image={image}/>
    });
  }

  render() {
    return (
      <div className="content-preview">
        {this.renderHeader()}
        {this.renderImages()}
        <PreviewDescription 
          descriptionTitle={this.props.descriptionTitle}
          description={this.props.description}
        />
        <AuthorInfoTag authorName={this.props.authorName}/>
      </div>
    );
  }
}