import React from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'
const Header = ()=>{
  return (
    <div>
      <div className="header" style={{backgroundImage:`url(${assets.header_img})`}}>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose, from a diverse menu featuring a delectable array of dishes crafterd with the finest ingredients and culinery expertise. Our mission is to satisfy cravings and elevate your dining exprience, one delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header
