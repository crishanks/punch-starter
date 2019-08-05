import React from 'react';

//Components
import DropDownMenuSelectorRow from './DropDownMenuSelectorRow';

const DropDownMenuSelector = (props) => {
  return (
    <>
      {renderSelectorRows(props.categories)}
    </>
  );
}

const renderSelectorRows = (categories) => {
  return categories.map(category => {
    return <DropDownMenuSelectorRow category={category}/>
  });
}

export default DropDownMenuSelector;