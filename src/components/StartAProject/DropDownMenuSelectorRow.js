import React, { useState } from 'react';

const DropDownMenuSelectorRow = (props) => {
  return (
    <div 
      className="menu-selector-row"
      onClick={() => chooseCategory(props)}
    >
      <p>{props.category}</p>
    </div>
  );
}

//onClick needs to:
//hide the dropdownmenuselector
//update the dropdownmenu header to display the selected category name
//add a green checkmark icon to the selected row seen when the dropdowmenuselector is opened again
//remove the green checkmark icon from the previously selected row (if there was one previously selected)

const chooseCategory = (props) => {
  props.toggleDropDownClick(!props.dropDownClicked);
  const headerTitle = document.getElementById("dropdown-category-title");
  headerTitle.innerHTML = props.category;
}

export default DropDownMenuSelectorRow;