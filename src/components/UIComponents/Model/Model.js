import React, { Component } from 'react';
import Axus from '../../../hoc/Auxs/Auxs';
import './Model.css';
import Backdrop from '../Backdrop/Backdrop';
class Model extends Component {
    render() {
        return (
            <Axus>
                <Backdrop show={this.props.show} click={this.props.modelClosed}  />
                <div className="Modal" style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0' }}>
                    {this.props.children}
                </div>
            </Axus>
        )
    }
}

export default Model;