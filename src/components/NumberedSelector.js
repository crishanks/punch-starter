import React from 'react';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Create a renderNumbers function that renders a new button and subsequent number after every 3 project previews

const NumberedSelector = props => {
  return (
    <div className="numbered-selector">
    <FontAwesomeIcon className="icon arrow" icon={faChevronLeft}/>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <FontAwesomeIcon className="icon arrow" icon={faChevronRight}/>
    </div>
  );
}

export default NumberedSelector;