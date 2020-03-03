import { Link } from 'react-router-dom';
import React from 'react';


class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.user;
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    update(field) {
        return event => (
            this.setState({ [field]: event.target.value })
        )
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props);
        this.props.signup(this.state);
    }

    render() {
        console.log(this.state)
        return (
            <div className="signup-form-page">
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
                                <input type="text"
                                    value={this.state.username}
                                    className="signup-form-input"
                                    onChange={this.update('username')}
                                    placeholder="JohnDoe14" />
                            </label>
                            <br/>
                            <label className="signup-input-label">Display Name:
                                <br/>
                                <input type="text"
                                    value={this.state.formal_name}
                                    className="signup-form-input"
                                    onChange={this.update('formal_name')}
                                    placeholder="John Doe" />
                            </label>
                            <br/>
                            <label className="signup-input-label">Email:
                                <br/>
                                <input type="text"
                                    value={this.state.email}
                                    className="signup-form-input"
                                    onChange={this.update('email')}
                                    placeholder="johndoe@example.com" />
                            </label>
                            <br/>
                            <label className="signup-input-label">Password:
                                <br/>
                                <input type="password"
                                    value={this.state.password}
                                    className="signup-form-input"
                                    onChange={this.update('password')}
                                    placeholder="Password" />
                            </label>
                            <br />
                            <input type="submit"
                                value="Sign Up"
                                className="signup-submit-button" />
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