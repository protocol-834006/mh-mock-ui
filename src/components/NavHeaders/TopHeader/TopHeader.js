import React, { Component } from 'react';
import SMDropdownMenu from '../../UIComponents/SMDropdownMenu/SM_DropdownMenu';
class TopHeader extends Component {

    state ={
       showDropdownMenu:false
    }

    // Handle DropdownMenu

    handleDropDownMenu =()=>{
       let show = !this.state.showDropdownMenu;
       this.setState({showDropdownMenu:show}) 
    }
    
      

    render() {
        return (
            <div className="header-upper">
            <div className="header-inner container">
                <div className="header-block-flex order-1 mr-auto">
                    <nav className="nav nav-sm header-block-flex">
                        <a className="nav-link d-md-none" href="login.html"><i className="fa fa-user"></i></a>
                        <a className="nav-link text-xs text-uppercase d-none d-md-block" href="#signup-modal" data-toggle="modal" onClick={this.props.openSignUpModel}>Sign Up</a> <a className="nav-link text-xs text-uppercase d-none d-md-block" href="#login-modal" data-toggle="modal" onClick={this.props.openLoginModel}>Login</a>
                    </nav>
                    <div className="header-divider header-divider-sm"></div>
                    <div className="dropdown dropdowns-no-carets">
                        <a href="#en" className="nav-link text-xs p-0 dropdown-toggle ml-1" data-toggle="dropdown" onClick={this.handleDropDownMenu}><i className="flag-icon flag-icon-gb"></i></a>
                        <SMDropdownMenu show={this.state.showDropdownMenu}/>
                    </div>
                </div>

                <div className="nav nav-icons header-block order-12">
                    <a href="#" className="nav-link"> <i className="fab fa-twitter-square icon-1x"></i> <span className="sr-only">Twitter</span> </a>
                    <a href="#" className="nav-link"> <i className="fab fa-facebook-square icon-1x"></i> <span className="sr-only">Facebook</span> </a>
                    <a href="#" className="nav-link"> <i className="fab fa-linkedin icon-1x"></i> <span className="sr-only">Linkedin</span> </a>
                    <a href="#" className="nav-link"> <i className="fab fa-google-plus-square icon-1x"></i> <span className="sr-only">Google plus</span> </a>
                </div>
            </div>
        </div>
        )
    }

}

export default TopHeader;