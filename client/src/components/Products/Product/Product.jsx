import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Product.scss";
import prod from '../../../assets/cat1.jpg'

const Product = () => {
  return (
    <>
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod} alt=''/>
      </div>
      <div className="prod-details">
        <span className="name">Mini Mogra 10Kg</span>
        <span className="price">&#8377; 499</span>
      </div>
    </div>
    </>
  )
}

export default Product