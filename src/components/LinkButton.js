import React from 'react';

const LinkButton = (props) => {
  return (
    <div className="link-button">
      <a href={props.link}>{props.title}</a>
    </div>
  );
}

export default LinkButton;