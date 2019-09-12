import React from 'react';

const SquareButton = props => {
  return props.link ? 
    <div className="square-button" type={props.type}>
      <a href={props.link}>{props.title}</a>
    </div> 
    : 
    <button className="square-button" type={props.type}>{props.title}</button>
}

export default SquareButton;