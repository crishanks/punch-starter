import React from 'react';

//Components
import PreviewImage from '../../components/Home/PreviewImage';
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortDescription from '../../components/Home/ShortDescription';
import AuthorInfoTag from '../../components/Home/AuthorInfoTag';
import PercentFunded from '../../components/Home/PercentFunded';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ProjectPreview = (props) => {
  return (
    <div className="project-preview-container">
      <PreviewImage image={props.image}/>
      <div className="project-preview-content">
        {props.title ? <PreviewTitle title={props.title}/> : null}
        {props.description ? <ShortDescription description={props.description}/> : null}
        {props.percentage ? <PercentFunded percentage={props.percentage}/> : null}
        <AuthorInfoTag authorName={props.authorName}/>
      </div>
      <div className="heart-icon-container">
        {props.heart ? <FontAwesomeIcon className="heart-icon" icon={faHeart}/> : null}
      </div>
    </div>
  );
}

export default ProjectPreview;