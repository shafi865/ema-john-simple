import React from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState (null);
   
    useEffect(()=> {
        fetch('http://localhost:3200/product/'+ productKey)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })
    }, [])
    console.log(product);
    
    
    
    return (
        <div>
            {
              product &&  <Product product={product} showAddToCart={false}></Product>
            }
        </div>
    );
};

export default ProductDetail;