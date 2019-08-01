import React, { useState } from 'react';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropDownMenu = (props) => {
    const [clicked, toggleClick] = useState(false);
    return (
        <div>
            <p>{props.title}</p>
            <FontAwesomeIcon 
                className="icon" 
                icon={faChevronDown}
                onClick={() => toggleClick(!clicked)}
            />
        </div>
    );
}

export default DropDownMenu;