import React from 'react';

//Components
import BasicLink from './BasicLink';

const PublicationBlurb = props => {
  return (
    <div>
      <img src={[props.image]} alt="publication image"/>
      <div className="blurb-title-container">
        <h1>{props.title}</h1>
      </div>
      <div className="blurb-description">
        <p>{props.description}</p>
      </div>
      <BasicLink
        title={props.linkTitle}
        link={props.link}
      />
    </div>
  );
}

export default PublicationBlurb;