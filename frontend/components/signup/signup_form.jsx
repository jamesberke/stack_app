import { Link } from 'react-router-dom';
import React from 'react';


class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUserSubmit = this.demoUserSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    };

    componentWillUnmount() {
        // Need to clear error messages
        this.props.clearSessionErrors();
    }

    update(field) {
        return event => (
            this.setState({ [field]: event.target.value })
        )
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.signup(this.state);
    };

    demoUserSubmit(event) {
        event.preventDefault();
        this.props.login({ email: "demouser@gmail.com", password: "pleasehireme" });
    };

    renderErrors() {
        let { errors } = this.props;

        if (errors.length === 0) {
            return null;
        }
        
        return (
            <div className="signup-errors">
                {errors.join(" \u2022 ")}
            </div>   
        )
    };

    render() {
        console.log(this.state)
        // Need to style errors
        return (
            <div className="signup-form-page">
                <div className="signup-error-container">
                    {this.renderErrors()}
                </div>
                <div className="signup-form-main">
                    <h2 className="signup-form-title">
                        Sign up with Stack
                    </h2>
                    <h3 className="signup-form-title2">
                        Leave email behind
                    </h3>
                    <p className="signup-form-title-note"></p>
                    <div className="signup-form-input-container">
                        <form onSubmit={this.handleSubmit}>
                            <label className="signup-input-label">Username:
                                <br/>
                                <input required 
                                    type="text"
                                    value={this.state.username}
                                    className="signup-form-input"
                                    onChange={this.update('username')}
                                    placeholder="JohnDoe14" />
                            </label>
                            <br/>
                            <label className="signup-input-label">Display Name:
                                <br/>
                                <input type="text"
                                    value={this.state.formalName}
                                    className="signup-form-input"
                                    onChange={this.update('formalName')}
                                    placeholder="John Doe" />
                            </label>
                            <br/>
                            <label className="signup-input-label">Email:
                                <br/>
                                <input required
                                    type="email"
                                    value={this.state.email}
                                    className="signup-form-input"
                                    onChange={this.update('email')}
                                    placeholder="johndoe@example.com" />
                            </label>
                            <br/>
                            <label className="signup-input-label">Password:
                                <br/>
                                <input required
                                    type="password"
                                    value={this.state.password}
                                    minLength="6"
                                    className="signup-form-input"
                                    onChange={this.update('password')}
                                    placeholder="Password" />
                            </label>
                            <br />
                            <input type="submit"
                                value="Sign Up"
                                className="signup-submit-button" />
                            <br />
                            <input type="submit"
                                value="Sign In As Demo User"
                                className="demo-submit-button"
                                onClick={this.demoUserSubmit} />
                            <br />
                            <div className="signup-link-container">
                                <Link to="/login" className="signup-redirect-link">
                                    Already a member?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default SignupForm;