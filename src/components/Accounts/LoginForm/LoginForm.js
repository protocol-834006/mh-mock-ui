import React, { Component } from 'react';
import './LoginForm.css';
class LoginForm extends Component {
    render() {
        return (
            <div className="modal-content">
                <form>
                    <div className="modal-header bg-light">
                        <h4 className="modal-title">Login</h4>
                        <button type="button" className="close"  aria-hidden="true" onClick={this.props.modelClose}>&times;</button>
                    </div>


                    <div className="modal-body">
                        <div className="form-group">
                            <label className="sr-only">Email</label>
                            <input type="email" id="login-email" className="form-control email" placeholder="Email" />
                        </div>
                        <div className="form-group mb-0">
                            <label className="sr-only">Password</label>
                            <input type="password" id="login-password" className="form-control password mb-1" placeholder="Password" />
                        </div>
                    </div>

                    <div className="modal-footer bg-light py-3">
                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-primary">Login</button>
                            <button type="button" className="btn btn-link ml-1" data-dismiss="modal" aria-hidden="true">Cancel</button>
                        </div>
                        <p className="text-xs text-right text-lh-tight op-8 my-0 ml-auto">
                            Not a member? <a href="#" className="signup">Sign up now!</a>
                            <br />
                            <a href="#">Forgotten password?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
export default LoginForm;