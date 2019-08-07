import React from 'react';
import { connect } from 'react-redux';

//Components
import LinkButton from '../../components/Home/LinkButton';
import ProfileImage from '../../components/Home/ProfileImage';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeaderBar = (props) => {
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
        {props.loggedIn ? 
          <ProfileImage className="profile-image" image={"https://img.jakpost.net/c/2018/11/28/2018_11_28_59557_1543397471._large.jpg"}/> : 
          <div className="log-in-button, link-button">
            <a href="/">Log in</a>
          </div>
        } 
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(HeaderBar);