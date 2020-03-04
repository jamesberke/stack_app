import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUserSubmit = this.demoUserSubmit.bind(this);
    };

    update(field) {
        return event => (
            this.setState({ [field]: event.target.value })
        )
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state);
    }
    
    demoUserSubmit(event) {
        event.preventDefault();
        this.props.login({email:"demouser@gmail.com", password:"pleasehireme"});
    }

    render() {
        return (
            <div className="login-form-page">
                <div className="login-form-main">
                    <h2 className="login-form-title">
                        Sign in to Stack
                    </h2>
                    <br />
                    <p className="login-form-title-note"></p>
                    <form className="login-form-input-container" onSubmit={this.handleSubmit}>
                        <h3 className="login-input-header">
                            Enter your <span className="input-header-bold">email address</span> and <span className="input-header-bold">password.</span>
                        </h3>
                        <input type="text"
                            value={this.state.email}
                            className="login-form-input"
                            onChange={this.update('email')}
                            placeholder="you@example.com" />
                        <input type="password"
                            value={this.state.password}
                            className="login-form-input"
                            onChange={this.update('password')}
                            placeholder="password" />
                        <br />
                        <input type="submit"
                            value="Sign In"
                            className="login-submit-button" />
                        <input type="submit"
                            value="Sign In As Demo User"
                            className="demo-submit-button"
                            onClick={this.demoUserSubmit} />
                        <br />
                    </form>
                    <div className="login-link-container">
                        <Link to="/" className="forgot-password-link">
                            Forgot password?
                        </Link>
                        <span>{'\u2022'}</span>
                        <Link to="/" className="forgot-email-link">
                            Forgot which email you used?
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default LoginForm;