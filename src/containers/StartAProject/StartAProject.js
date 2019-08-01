import React, { Component } from 'react';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortDescription from '../../components/Home/ShortDescription';
import DropDownMenu from '../../components/StartAProject/DropDownMenu';

export default class StartAProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PreviewTitle title={"Let's get you set up."}/>
                <ShortDescription description={"Pick a project category to connect with a specific community. You can always update this later."}/>
                <DropDownMenu/>
            </div>
        );
    }
}
