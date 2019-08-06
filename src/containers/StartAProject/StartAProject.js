import React, { useState } from 'react';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortDescription from '../../components/Home/ShortDescription';
import DropDownMenu from '../../components/StartAProject/DropDownMenu';

const StartAProject = () => {
  const [dropDownClicked, toggleDropDownClick] = useState(false);
  return (
    <div className="start-a-project">
        <PreviewTitle title={"Let's get you set up."}/>
        <ShortDescription description={"Pick a project category to connect with a specific community. You can always update this later."}/>
        <div className="drop-down-header" onClick={() => toggleDropDownClick(!dropDownClicked)}>
          <DropDownMenu 
            title={"Select your category"}
            dropDownClicked={dropDownClicked}
            toggleDropDownClick={toggleDropDownClick}
          />
        </div>
    </div>
  );
}

export default StartAProject;