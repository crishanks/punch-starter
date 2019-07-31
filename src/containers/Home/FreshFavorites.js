import React, { Component } from 'react';

//Components
import SectionHeader from '../../components/Home/SectionHeader';
import ProjectPreview from './ProjectPreview';

export default class FreshFavorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SectionHeader header={"fresh favorites"}/>
        <ProjectPreview 
          image={"https://ksr-ugc.imgix.net/assets/025/775/780/cdfd71d86476b5994cb6ff2aaa8955af_original.png?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1562861681&auto=format&frame=1&q=92&s=413107d31d9312c08a85a2461e77e9ba"}
          title={"| BLACK | RED | WHITE | Nonexistent Games"}
          description={"A series of three existential, experimental games inpired by color and dreams. They don't exist yet. I trust you. Do you trust me?"}
          authorName={"Nathan D. Paoletta"}
        />
        <ProjectPreview 
          image={"https://ksr-ugc.imgix.net/assets/025/775/780/cdfd71d86476b5994cb6ff2aaa8955af_original.png?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1562861681&auto=format&frame=1&q=92&s=413107d31d9312c08a85a2461e77e9ba"}
          title={"| BLACK | RED | WHITE | Nonexistent Games"}
          description={"A series of three existential, experimental games inpired by color and dreams. They don't exist yet. I trust you. Do you trust me?"}
          authorName={"Nathan D. Paoletta"}
        />
        <ProjectPreview 
          image={"https://ksr-ugc.imgix.net/assets/025/775/780/cdfd71d86476b5994cb6ff2aaa8955af_original.png?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1562861681&auto=format&frame=1&q=92&s=413107d31d9312c08a85a2461e77e9ba"}
          title={"| BLACK | RED | WHITE | Nonexistent Games"}
          description={"A series of three existential, experimental games inpired by color and dreams. They don't exist yet. I trust you. Do you trust me?"}
          authorName={"Nathan D. Paoletta"}
        />
        <ProjectPreview 
          image={"https://ksr-ugc.imgix.net/assets/025/775/780/cdfd71d86476b5994cb6ff2aaa8955af_original.png?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1562861681&auto=format&frame=1&q=92&s=413107d31d9312c08a85a2461e77e9ba"}
          title={"| BLACK | RED | WHITE | Nonexistent Games"}
          description={"A series of three existential, experimental games inpired by color and dreams. They don't exist yet. I trust you. Do you trust me?"}
          authorName={"Nathan D. Paoletta"}
        />
      </>
    );
  }
}