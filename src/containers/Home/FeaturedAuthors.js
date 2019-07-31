import React, { Component } from 'react';

//Components
import FeaturedAuthor from '../../components/Home/FeaturedAuthor';
import PublicationBlurb from '../../components/Home/PublicationBlurb';

export default class FeaturedAuthors extends Component {
  constructor(props) {
    super(props)
  }

  //Typically make a request for authors, render a FeaturedAuthor for each author, and pass that whole author object down as props to FeaturedAuthor

  render() {
    return (
      <>
      {
        this.props.publicationBlurb ? 
        <div className="publication-blurb">
          <PublicationBlurb
            image={"https://ui-ex.com/images/swirl-transparent-3.png"}
            title={"The Creative Independent"}
            description={"A growing resource of emotional and practical guidance for creative people."}
            linkTitle={"Visit The Creative Independent"}
            link={"/"}
          />
        </div> : null
      }
        <div className="dotted-border"></div>
        <div className="authors-top-row">
          <FeaturedAuthor 
            authorName={"Desiree Akhavan"} 
            description={"on working on both sides of the camera."}
            image={"https://ksr-static.imgix.net/Desiree@2x.jpg?ixlib=rb-2.0.0&auto=compress%2Cformat&s=7007cc7666d1fa16a24305c9f2cb17f3"}
          />
          <FeaturedAuthor 
          authorName={"Alicia Bognanno"} 
          description={"on managing your creative time."}
          image={"https://ksr-static.imgix.net/Alicia@2x.jpg?ixlib=rb-2.0.0&auto=compress%2Cformat&s=af61c430c85780c3d1823c1cc361d22b"}
          />
          <FeaturedAuthor 
            authorName={"Naama Tsabar"} 
            description={"on taking control of your process."}
            image={"https://ksr-static.imgix.net/Naama@2x.jpg?ixlib=rb-2.0.0&auto=compress%2Cformat&s=2cecc34b9ca64f4fc2543c6092800f03"}
          />
        </div>
        <div className="authors-bottom-row">
          <FeaturedAuthor 
            authorName={"Bjork"} 
            description={"on nature and technology."}
            image={"https://ksr-static.imgix.net/Bjork@2x.jpg?ixlib=rb-2.0.0&auto=compress%2Cformat&s=c5514cce51d1dd6e6190da6d4445fc64"}
          />
          <FeaturedAuthor 
            authorName={"John Cale"} 
            description={"on revisiting your work."}
            image={"https://ksr-static.imgix.net/John@2x.jpg?ixlib=rb-2.0.0&auto=compress%2Cformat&s=d659165bdc87fd50e2bee8d24c0b7acb"}
          />
          <FeaturedAuthor 
            authorName={"Stevie Nicks"} 
            description={"on the importance of being a romantic."}
            image={"https://ksr-static.imgix.net/Stevie@2x.jpg?ixlib=rb-2.0.0&auto=compress%2Cformat&s=f8c5dfbecc9f1b36d3bf7ff2c08c6883"}
          />
        </div>
      </>
    );
  }
}