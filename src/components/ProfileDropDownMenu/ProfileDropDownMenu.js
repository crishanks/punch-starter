import React from 'react';

//Components
import PreviewTitle from '../Home/PreviewTitle';
import BasicLink from '../Home/BasicLink';

const ProfileDropDownMenu = props => {
  return (
    <>
      <PreviewTitle title={"YOUR ACCOUNT"}/>
      <BasicLink title={"Profile"} link={"/profile"}/>
      <BasicLink title={"Log out"} link={"/"}/>
    </>
  );
}

export default ProfileDropDownMenu;