import React from 'react';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    constructor(props) {
        super(props);   
    }

    render() {
        return (
            <nav className='nav-bar'>
                <div className='navbar-left'>
                    <Link to='/' className='nav-home-link'>
                        <img src={window.slack-logo} className='slack-logo'/>
                        <p className='logo-text'>stack</p>
                    </Link>
                    <a href='https://github.com/jamesberke/stack_app' className='nav-github'>
                        <img src={window.github-logo} className='github-logo'/>
                        <div className='github-text'>GitHub</div>
                    </a>
                    <a href='https://www.linkedin.com/in/james-berke-33912718a/' className='nav-linkedin'>
                        <img src={window.linkedin-logo} className='linkedin-logo'/>
                        <div className='linkedin-text'>LinkedIn</div>
                    </a>
                </div>
                <div className='navbar-right'>
                    <Link to='/login' className='nav-login-link'>Sign In</Link>
                    <Link to='/signup' className='nav-signup-link'>GET STARTED</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;