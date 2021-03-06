import React from 'react';
import { useAuth } from '../Login/UseAuth';



const Cart = (props) => {

    const cart = props.cart;
    const auth = useAuth();
    console.log(auth.user);
    const total = cart.reduce((total, prd) => total+prd.price*prd.quantity,0);
    //debugger;
    
    let shipping = 0;
    if (total> 35){
        shipping = 0;
    }
    else if (total>15){
        shipping = 4.99;
    }
    else if (total>0){
        shipping = 12.99;
    }
    
    const tax = total * 0.10  ;
    const grandTotal = total + shipping + tax;

    const roundingNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Item Price: {roundingNumber(total)}</p>
            <p>Shipping Cost : {roundingNumber(shipping)}</p>
            <p>Estimated Tax :{roundingNumber(tax)}</p>
            <p>Grand Total : {roundingNumber(grandTotal)} </p>
            <br/>
                {
                    props.children
                }
            <br/>
            <p>{}</p>
        </div>
    );
};

export default Cart;