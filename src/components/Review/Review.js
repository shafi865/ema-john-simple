import React, { useEffect, useState } from 'react';
import './Review.css';
import { getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/UseAuth';

const Review = () => {

    const [cart, setCart] = useState([]);
    const auth = useAuth();
  
    const handleRemoveProduct = (productKey) => {
        console.log("Removed Clicked", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }


    useEffect(() => {
        //cart data
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        //fetch a (http://) na diye vul korlam
        fetch('http://localhost:3200/getProductsByKey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const cartProducts = productKeys.map( key => {
                const product = data.find(pd => pd.key === key);
                product.quantity = savedCart[key];
                return product;
            });
            setCart(cartProducts);
        })

       
    },[]);

    
    return (
        <div className="shop-container">
           <div className="product-container">
            {
                cart.map(pd=> <ReviewItem 
                    key = {pd.key}
                    handleRemoveProduct = {handleRemoveProduct}
                    product={pd}></ReviewItem>)
            }
            {
               
            }
            {
                !cart.length && <h1 className="empty"> Your Cart is Empty. <a href="/shop">Keep Shopping</a></h1>

            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="shipment">
                    {
                        auth.user ? 
                        <button className="cart-btn">Proceed to Shipment</button>
                        :
                        <button className="cart-btn">Login to Proceed</button>
                    }
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;