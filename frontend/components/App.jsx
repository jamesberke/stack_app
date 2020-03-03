import NavbarContainer from './navbar/navbar_container';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';


const App = () => (
    
        // <div>
        //     <h1>Welcome to Stack</h1>
        // </div>
        <div className='page-div'>
            <header>
                <Route path={['/', '/signup', '/login']} component={NavbarContainer}/>
            </header>
            <Switch>
                <Route exact path="/" component={SplashContainer} />
            </Switch>
        </div>
);

export default App;