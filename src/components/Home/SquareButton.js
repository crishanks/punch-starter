import React from 'react';

const SquareButton = props => {
  console.log('button props: ', props)
  return (
    <div className="square-button">{props.title}</div>
  );
}

export default SquareButton;