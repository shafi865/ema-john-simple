import React, { useEffect, useState } from 'react';
import './Review.css';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'

const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();

    }

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
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);

    let thanks;
    if(orderPlaced){ 
    thanks = <img src={happyImage} alt=""/>
    };

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
                thanks
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button 
                        onClick= {handlePlaceOrder}
                        className="cart-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;