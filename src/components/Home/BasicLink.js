import React from 'react';

const BasicLink = props => {
  return (
    <a href={props.link}>{props.basicLinkTitle}</a>
  ); 
}

export default BasicLink;