import React from 'react';

const SquareButton = props => {
  return props.link ? <div className="square-button"><a href={props.link}>{props.title}</a></div> : <div className="square-button">{props.title}</div>
}

export default SquareButton;