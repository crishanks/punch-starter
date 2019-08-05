import React from 'react';

//Components
import DropDownMenuSelectorRow from './DropDownMenuSelectorRow';

const DropDownMenuSelector = (props) => {
  return (
    <>
      {renderSelectorRows(props)}
    </>
  );
}

const renderSelectorRows = (props) => {
  return props.categories.map(category => {
    return <DropDownMenuSelectorRow 
      category={category}
      toggleDropDownClick={props.toggleDropDownClick}
      dropDownClicked={props.dropDownClicked}
    />
  });
}

export default DropDownMenuSelector;