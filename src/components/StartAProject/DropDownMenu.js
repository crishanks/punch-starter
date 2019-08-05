import React, { useState } from 'react';

//Components
import DropDownMenuSelector from './DropDownMenuSelector';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropDownMenu = (props) => {
  return (
    <>
      <p>{props.title}</p>
      <FontAwesomeIcon 
        className="icon" 
        icon={faChevronDown}
        onClick={() => props.toggleClick(!props.clicked)}
      />
    </>
  );
}

export default DropDownMenu;