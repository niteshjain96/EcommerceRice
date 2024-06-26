import { useContext, useState } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from '../../../src/assets/cat1.jpg';

const SingleProduct = () => {
    
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={prod}
                        />
                    </div>
                    <div className="right">
                        <span className="name">Mini Mogra 10Kg</span>
                        <span className="price">&#8377; 490</span>
                        <span className="desc">description</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span >-</span>
                                <span>5</span>
                                <span >+</span>
                            </div>
                            <button
                                className="add-to-cart-button"
                                
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>
                                    
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts
                    // productId={id}
                    // categoryId={product.categories.data[0].id}
                />
            </div>
        </div>
    );
};

export default SingleProduct;
