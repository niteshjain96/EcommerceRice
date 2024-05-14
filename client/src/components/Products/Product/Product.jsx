import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Product.scss";
import prod from '../../../assets/cat1.jpg'

const Product = ({id,data}) => {
  return (
    <>
    <div className="product-card">
      <div className="thumbnail">
        <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + data?.img?.data[0]?.attributes?.url} alt=''/>
      </div>
      <div className="prod-details">
        <span className="name">{data?.title}</span>
        <span className="price">&#8377; {data?.price}</span>
      </div>
    </div>
    </>
  )
}

export default Product