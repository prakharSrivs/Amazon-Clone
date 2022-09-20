import React from 'react'
import "../helper/header.css"
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink,Link} from 'react-router-dom';
import {useStateValue} from '../Contexts/StateInventory'

function Header() {
    const [{basket},dispatch]=useStateValue();
  return (
    <div className="header">
    <Link to="/">
    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className='logo' alt="amazon-logo" />
    </Link>
       <div className="headerSearch">
        <input type="text" className="searchInput"/>
        <SearchIcon  className='searchIcon'/>
       </div>
       <div className="optionsAll">
       <div className="options">
       <div className="optionspart1">
            Hello
        </div>
       <Link to='/login' >
       <div className="optionspart2" style={{color:"white", textDecoration:"none"}}>
        Sign in 
       </div>
       </Link>
       </div>
        
       <div className="options">
        <div className="optionspart1">
            Returns
        </div>
        <div className="optionspart2">
            & Orders
        </div>
       </div>
       <div className="options">
        <div className="optionspart1">
            Your
        </div>
        <div className="optionspart2">
            Prime
        </div>
       </div>
          
       </div>
       <div className="cart">
       <Link to="/checkout">
        <ShoppingBasketIcon className='cartIcon' />
        </Link>
        <div className="cartCount">
        {basket.length}
        </div>
        
       </div>
    
    </div>
  )
}

export default Header