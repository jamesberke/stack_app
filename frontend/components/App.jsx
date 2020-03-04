import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ClientContainer from './client/client_container';
import LoginFormContainer from './login/login_container';
import NavbarContainer from './navbar/navbar_container';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './signup/signup_container';
import SplashContainer from './splash/splash_container';


const App = () => (

        <div className='page-div'>
            <header>
                <AuthRoute exact path={['/', '/signup', '/login']} component={NavbarContainer}/>
            </header>
            <Switch>
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/client" component={ClientContainer} />
                <AuthRoute exact path="/" component={SplashContainer} />
            </Switch>
        </div>

);

export default App;