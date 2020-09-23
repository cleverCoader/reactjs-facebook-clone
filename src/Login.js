import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {

    const signIn = () => {
        
    }

    return (
        <div className="login" >
            <div className="login_logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            <button type="submit" onClick={signIn}>Sign In</button>
            </div>
        </div>
    )
}

export default Login;
