import React from 'react';

const FeaturedAuthor = props => {
  return (
    <>
      <div className="featured-author-content-container">
        <img src={props.image} alt="author image"/>
        <div className="author-info-box">
          <a>{props.authorName}</a>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default FeaturedAuthor;