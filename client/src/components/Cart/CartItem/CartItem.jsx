import { MdClose } from "react-icons/md";
import prod from '../../../assets/cat1.jpg'
import "./CartItem.scss";
import React from 'react'

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="image-container">
          <img src={prod} alt=""/>
        </div>
        <div className="prod-details">
          <span className="name">Product Name</span>
          <MdClose className="close-btn"/>
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
        </div>
      </div>

    </div>

  )
}

export default CartItem