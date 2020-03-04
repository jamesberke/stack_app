import ClientContainer from './client/client_container';
import LoginFormContainer from './login/login_container';
import NavbarContainer from './navbar/navbar_container';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './signup/signup_container';
import SplashContainer from './splash/splash_container';
import SignupForm from "./signup/signup_form";


const App = () => (

        <div className='page-div'>
            <header>
                <Route exact path={['/', '/signup', '/login']} component={NavbarContainer}/>
            </header>
            {/* <SignupForm/> */}
            <Switch>
                <Route path="/signup" component={SignupFormContainer} />
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/client" component={ClientContainer} />
                <Route exact path="/" component={SplashContainer} />
            </Switch>
        </div>

);

export default App;