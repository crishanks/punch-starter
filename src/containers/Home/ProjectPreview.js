import React, { Component } from 'react';

//Components
import PreviewImage from '../../components/Home/PreviewImage';
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortDescription from '../../components/Home/ShortDescription';
import AuthorInfoTag from '../../components/Home/AuthorInfoTag';
import PercentFunded from '../../components/Home/PercentFunded';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default class ProjectPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-preview-container">
        <PreviewImage image={this.props.image}/>
        <div className="project-preview-content">
          {this.props.title ? <PreviewTitle title={this.props.title}/> : null}
          {this.props.description ? <ShortDescription description={this.props.description}/> : null}
          {this.props.percentage ? <PercentFunded percentage={this.props.percentage}/> : null}
          <AuthorInfoTag authorName={this.props.authorName}/>
        </div>
        <div className="heart-icon-container">
          {this.props.heart ? <FontAwesomeIcon className="heart-icon" icon={faHeart}/> : null}
        </div>
      </div>
    );
  }
}