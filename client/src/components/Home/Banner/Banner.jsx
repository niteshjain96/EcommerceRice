import React from "react";
import BannerImg from '../../../assets/banner-img.png'
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="hero-banner">
      <img className='banner-img' src={BannerImg} alt=""/>
      <div className="content">
        <div className="text-content">
          <h1>Classic Rice</h1>
          <p>Basmati Rice 1121</p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <button className="banner-cta v2">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
