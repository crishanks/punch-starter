import React from 'react';

const AuthorInfoTag = (props) => {
  return (
    <div className="author-info-tag">
      <p>By {props.authorName}</p>
    </div>
  );
}

export default AuthorInfoTag;