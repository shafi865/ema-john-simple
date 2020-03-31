import React from 'react';
import './Login.css';
import Auth from './UseAuth';


const Login = () => {
    const auth = Auth();
    //console.log(auth);
    return (
        <div>
            <h1>Login Page</h1>
        {
            auth.user ? <button onClick={auth.signOut} className="cart-btn"> Sign Out</button> :
            <button onClick={auth.signInWithGoogle} className="cart-btn"> Sign in with Google</button>
        }
        </div>
    );
};

export default Login;