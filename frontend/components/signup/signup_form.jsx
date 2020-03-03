import { Link } from 'react-router-dom';
import React from 'react';


class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.user)
        console.log(this.props)
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
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                className="signup-form-input"
                                onChange={this.update('username')} />
                        </label>
                        <br/>
                        <label>Display Name:
                            <input type="text"
                                value={this.state.formalName}
                                className="signup-form-input"
                                onChange={this.update('formalName')} />
                        </label>
                        <br/>
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                className="signup-form-input"
                                onChange={this.update('email')} />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                className="signup-form-input"
                                onChange={this.update('password')} />
                        </label>
                        <br />
                        <input type="submit"
                            value="Sign Up"
                            className="signup-submit-button" />
                        <br />
                        <Link to="/login" className="signup-redirect-link">
                            Already a member?
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
};

export default SignupForm;