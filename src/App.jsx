import React from "react"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Switch} from 'react-router-dom';

import { logo } from "./components/NavBars/TopNav/assets";
import Header from "./components/NavBars/TopNav/Header";
import Home from './Home'
import Chats from './Chat/Chats'
import Profile from "./Profile/Profile"

var isLoggedIn = true;
var showSideNav = true;

function App(props){
    console.log(props.showSideNav)
    if (props.showSideNav == undefined){
        showSideNav = true
    }else{
        showSideNav = props.showSideNav
    }
    return(
        <HashRouter>
            <Header />

            <Home isLoggedIn = {isLoggedIn} showSideNav = {showSideNav}/>
            <Switch>
                <AuthRoute
                    authenticated={isLoggedIn}
                    redirectTo='/auth'
                    path='/chats'
                    component={Chats}/>
                <AuthRoute
                    authenticated={isLoggedIn}
                    redirectTo='/auth'
                    path='/profile'
                    component={Profile}/>
            </Switch>

        </HashRouter>
                    
    );
} 

export default App;