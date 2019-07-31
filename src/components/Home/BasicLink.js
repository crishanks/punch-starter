import React from 'react';

const BasicLink = props => {
  return (
    <a href={props.linkTitle}>{props.title}</a>
  ); 
}

export default BasicLink;