import Product from "./Product/Product";
import "./Products.scss";
import React from 'react'

const Products = ({products,innerPage,headingText}) => {
  console.log(products)
  if (!products || !products.data) {
    // If categories or categories.data is undefined, return null or handle the loading state
    return null; // or any loading indicator you prefer
  }
  return (
    <>
    <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
          {
            products.data.map((item)=>(
              <Product key={item.id} id={item.id} data={item.attributes}/>
            ))
          }
            
        </div>
    </div>
    </>
  )
}

export default Products