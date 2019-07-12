import React from 'react';

const ProfileImage = (props) => {
  return (
    <div className="profile-image">
      <img src={props.image} alt="profile image"/>
    </div>
  );
}

export default ProfileImage;