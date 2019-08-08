import React from 'react';

const BasicLink = props => {
  return (
    <a href={props.link}>{props.title}</a>
  ); 
}

export default BasicLink;