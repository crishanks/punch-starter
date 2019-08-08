import React from 'react';

const ShortTextInputBox = props => {
  return (
    <>
    <form>
      <textarea
      placeholder={props.placeholder}
      name="short-input-box" 
      id="short-input-box" 
      cols={props.cols} 
      rows={props.rows}></textarea>
    </form>
    </>
  );
}

export default ShortTextInputBox;