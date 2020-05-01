import React from 'react';
import './Inventory.css';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddInventory = () => {
        /*const product = fakeData[0];
        console.log('Before Post', product);
        fetch('http://localhost:3200/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify(fakeData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Post Successful', data);
        })*/

    }
    return (
        <div>
            <h1>Inventory</h1>
            <button onClick={handleAddInventory} >Add Inventory</button>
        </div>
    );
};

export default Inventory;