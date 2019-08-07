import React, { useState } from 'react';

const TextInputBox = (props) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [textInput, setTextInput] = useState('');

  return (
    <>
    <form>
      <textarea 
          name="input-box" 
          id="input-box" 
          cols="10" 
          rows="20"
          onChange={(event) => updateTextInput(event)}
        >
        {textInput}
      </textarea>
    </form>
      <div className="character-counter">
        <p>{characterCount}/135</p>
      </div>
    </>
  );

  function updateTextInput(event) {
    if (characterCount < 135) {
      setCharacterCount(characterCount++);
    }
    if (characterCount <= 135) {
      setTextInput(event.target.value);
    }
  }
}

export default TextInputBox;