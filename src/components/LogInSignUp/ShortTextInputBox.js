import React from 'react';

const ShortTextInputBox = props => {
  return (
    props.input ?
    <>
    <div>
      <textarea
      placeholder={props.placeholder}
      name={props.name}
      id="short-input-box" 
      cols={props.cols} 
      rows={props.rows}>
      </textarea>
    </div>
    </> :
    <>
      <input
      placeholder={props.placeholder}
      name={props.name}
      id="short-input-box">
      </input>
    </>
  );
}

export default ShortTextInputBox;