import React, { useState } from 'react';

const TextInputBox = () => {
  const [characterCount, setCharacterCount] = useState(0);
  const [textInput, setTextInput] = useState('');

  return (
    <>
    <form>
      <textarea 
          name="input-box" 
          id="input-box" 
          cols="20" 
          rows="20"
          onKeyDown={(event) => updateTextInput(event)}
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
    console.log(event.keyCode)
    let newCharacterCount = characterCount;

    if (characterCount < 135 && event.keyCode !== 8) {
      return setCharacterCount(++newCharacterCount);
    } else if (characterCount > 0 && characterCount <= 135 && event.keyCode === 8) {
      return setCharacterCount(--newCharacterCount);
    } else if (characterCount === 135 && event.keyCode !== 8) {
      return setTextInput(event.target.value)
    }
  }
}

export default TextInputBox;