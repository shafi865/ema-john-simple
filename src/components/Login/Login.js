import React from 'react';
import './Login.css';
import Auth from './UseAuth';


const Login = () => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/review';
        })
    }
    //console.log(auth);
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/shop';

        });
    }

    return (
        <div>
            <h1>Login Page</h1>
        {
            auth.user ? <button onClick={handleSignOut} className="cart-btn"> Sign Out</button> :
            <button onClick={handleSignIn} className="cart-btn"> Sign in with Google</button>
        }
        </div>
    );
};

export default Login;