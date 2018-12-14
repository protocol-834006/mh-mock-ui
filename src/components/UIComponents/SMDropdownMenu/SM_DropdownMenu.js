import React from 'react';


const smDropdownMenu = (props) => {
    let show = props.show ? props.show : null;
    return (
        <div className="dropdown-menu dropdown-menu-sm rounded dropdown-menu-arrow border-w-2 ml-2-neg" style={{display:show?'block':'none'}}>
            <a href="#es" className="dropdown-item lang-es"><i className="flag-icon flag-icon-es"></i> Spanish</a>
            <a href="#pt" className="dropdown-item lang-pt"><i className="flag-icon flag-icon-pt"></i> Portguese</a>
            <a href="#cn" className="dropdown-item lang-cn"><i className="flag-icon flag-icon-cn"></i> Chinese</a>
            <a href="#se" className="dropdown-item lang-se"><i className="flag-icon flag-icon-se"></i> Swedish</a>
        </div>
    )
}

export default smDropdownMenu;