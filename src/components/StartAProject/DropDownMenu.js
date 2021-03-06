import React, { useState } from 'react';

//Components
import DropDownMenuSelectorRow from './DropDownMenuSelectorRow';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropDownMenu = (props) => {
  return (
    <>
      <p id="dropdown-category-title">{props.title}</p>
      <FontAwesomeIcon 
        className="icon" 
        icon={faChevronDown}
      />
      {
        props.dropDownClicked ? (
          <div className="dropdown-menu-selector">
            {renderSelectorRows(props)}
          </div>
        ) : null
      }
    </>
  );
}

const renderSelectorRows = (props) => {
  return props.categories.map(category => {
    return <DropDownMenuSelectorRow 
      category={category}
      dropDownClicked={props.dropDownClicked}
      toggleDropDownClick={props.toggleDropDownClick}
      key={category}
    />
  });
}

export default DropDownMenu;