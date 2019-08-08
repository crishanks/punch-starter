import React from 'react';

const ProfileImage = (props) => {
  return (
    <>
      <img src={props.image} alt="profile image"/>
    </>
  );
}

export default ProfileImage;