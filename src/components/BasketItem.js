import React from 'react'
import '../helper/BasketItem.css'
import {useStateValue} from '../Contexts/StateInventory'
function BasketItem(props) {
  const[{basket},dispatch]=useStateValue()
  function removeFromBasket(){
    dispatch({type:"RFC",payload:{id:props.id}})
  }
  return (
    <div className='item'>
      <div className="image">
      <img src={props.image} alt="" className="item-image" />
      </div>
      <div className="content">
         <div className="title">
          {props.title.substring(0,200)}...
         </div>
         <div className="price">
          ₹ {props.price}.00
         </div>
         <div className="rating">
         {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
         </div>
         <div className="removeFromCart">
          <button className="remove" onClick={removeFromBasket}>
            Remove from Cart
          </button>
         </div>
      </div>
    </div>
  )
}

export default BasketItem