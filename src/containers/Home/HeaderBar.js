import React, { useState } from 'react';
import { connect } from 'react-redux';

//Components
import LinkButton from '../../components/Home/LinkButton';
import ProfileImage from '../../components/Home/ProfileImage';
import ProfileDropDownMenu from '../../components/ProfileDropDownMenu/ProfileDropDownMenu';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeaderBar = (props) => {
  const [showProfileDropDownMenu, toggleShowProfileDropDownMenu] = useState(false);
  console.log('header props: ', props)
  return (
    <div className="header-bar">
      <div className="header-link-buttons">
        <LinkButton title="Explore" link="/"/>
        <LinkButton title="Start a project" link="/start"/>
      </div>
      <div className="logo">
        <h2><a href="/">punchstarter</a></h2>
      </div>
      <div className="header-search-profile-container">
        <div className="header-search">
          <p>Search</p>
          <FontAwesomeIcon className="icon" icon={faSearch}/>
        </div>
        {
          props.loggedIn ? 
          <div className="profile-image" onClick={() => toggleShowProfileDropDownMenu(!showProfileDropDownMenu)}>
            <ProfileImage className="profile-image" image={"https://img.jakpost.net/c/2018/11/28/2018_11_28_59557_1543397471._large.jpg"}/> 
          </div>
          : 
          <div className="log-in-button, link-button">
            <a href="/login">Log in</a>
          </div>
        } 
        {
          showProfileDropDownMenu ?
          <div className="profile-dropdown-menu">
            <ProfileDropDownMenu/>
          </div>
          :
          null
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(HeaderBar);