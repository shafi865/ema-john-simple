import React, { useEffect, useState, useRef } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Redirect, Link } from 'react-router-dom';
import Auth, { useAuth } from '../Login/UseAuth';



const usePrevious = value => {
    const prev = useRef();
    useEffect(() => {
        prev.current = value;
    },[value])
    return prev.current;
}


const Header = () => {
    const auth = useAuth();
    console.log(auth);
    const [count, setCount] =useState(0);
    const previous = usePrevious(count);
    return (
        <div className="Header">
            <img src={logo} alt=""/>
    <h1>Count : {count}  Previous : {previous}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/inventory">Manage Inventory</a>
                {
                    auth.user &&
                    <span style={{color:'white'}}>{auth.user.name}</span> 
                }
                {
                    auth.user ? <a href="/login">  Signed Out</a>
                    : <a href="/login">Signed In</a>
                }

            </nav>
        </div>
    );
};

export default Header;