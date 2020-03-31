import React, { useContext, useEffect, useState, useRef } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { UserContext } from '../../App';
import { Redirect } from 'react-router-dom';



const usePrevious = value => {
    const prev = useRef();
    useEffect(() => {
        prev.current = value;
    },[value])
    return prev.current;
}


const Header = () => {
    const user = useContext(UserContext);
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
                <span style={{color:'white'}}>{user}</span>
            </nav>
        </div>
    );
};

export default Header;