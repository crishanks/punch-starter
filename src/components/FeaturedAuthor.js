import React from 'react';

const FeaturedAuthor = props => {
  return (
    <>
      <img src={props.image} alt="author image"/>
      <div className="author-info-box">
        <a>{props.authorName}</a>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default FeaturedAuthor;