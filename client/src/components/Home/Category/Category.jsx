import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./Category.scss";
import cat1 from '../../../../src/assets/cat1.jpg'

const Category = ({categories}) => {
  const navigate=useNavigate();
  // console.log(categories)
  if (!categories || !categories.data) {
    // If categories or categories.data is undefined, return null or handle the loading state
    return null; // or any loading indicator you prefer
  }
  return (
    <div className="shop-by-category">
        <div className="categories">
          {
            categories.data.map((item)=>(
              <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data.attributes.url} alt=''/>
          </div>
            ))
          }   
        </div>
    </div>
    
  )
}

export default Category