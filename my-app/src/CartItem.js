// Hands-On: Creating a Shopping Cart Item Counter
// A common feature in e-commerce applications is an item counter within a shopping cart, allowing users to adjust the quantity of a product. This is a perfect use case for useState to manage the quantity of a specific item.

// Objective: Build a component that displays a product and allows the user to increase or decrease its quantity in a shopping cart.

// Step 1: Create the Cart Item Component

// Create a new component, e.g., CartItem.js

// src/CartItem.js
import React, { useState } from 'react';
import './CartItem.css'; // We'll create this CSS file next

function CartItem({ productName, initialQuantity = 1, price }) {
  // State to manage the quantity of this specific item
  const [quantity, setQuantity] = useState(initialQuantity);

  // Handler to increase quantity
  const increaseQuantity = () => {
    // Use functional update to ensure we're always adding to the latest quantity
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Handler to decrease quantity
  const decreaseQuantity = () => {
    // Ensure quantity does not go below 1
    setQuantity(prevQuantity => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        return 1; // Keep it at 1 if it's already 1
      }
    });
  };

  // Calculate the total price for this item
  const itemTotalPrice = quantity * price;

  return (
    <div className='cart-item'>
      <div className='item-details'>
        <h4>{productName}</h4>
        <p>Price: ${price.toFixed(2)} each</p>
      </div>
      
      <div className='quantity-controls'>
        <button onClick={decreaseQuantity} className='quantity-button'>-</button>
        <span className='quantity-display'>{quantity}</span>
        <button onClick={increaseQuantity} className='quantity-button'>+</button>
      </div>
      
      <div className='item-total'>
        <p>Total: ${itemTotalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;