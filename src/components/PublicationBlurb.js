import React from 'react';

//Components
import BasicLink from './BasicLink';

const PublicationBlurb = props => {
  return (
    <>
      <img src={[props.image]} alt="publication image"/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <BasicLink
        title={props.linkTitle}
        link={props.link}
      />
    </>
  );
}

export default PublicationBlurb;