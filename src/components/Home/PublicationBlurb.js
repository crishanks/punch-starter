import React from 'react';

//Components
import BasicLink from './BasicLink';

const PublicationBlurb = props => {
  return (
    <>
      <img src={[props.image]} alt="publication image"/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className="basic-link">
        <BasicLink
          basicLinkTitle={props.basicLinkTitle}
          link={props.link}
        />
      </div>
    </>
  );
}

export default PublicationBlurb;