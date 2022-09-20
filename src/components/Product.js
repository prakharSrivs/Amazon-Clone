import React from 'react'
import '../helper/Product.css'
import {useStateValue} from '../Contexts/StateInventory'

function Product(props) {
  const [state,dispatch]=useStateValue();
  function addToBasket(){
    dispatch({
      type:'ATC',
      payload: {
        ...props
      }
    })
  };
  return (
    <div className='product'>
        <div className="product_info">
            <img src={props.imageSrc} alt="" className="product_img" />
            <p className='productName'>{props.title}</p>
            <div className="secondsection">
            <p className="product_price">
                <small><sup>₹</sup></small>
                <strong>{props.price}</strong>
                <small><sup>00</sup></small>
            </p>
            <p className="product_stars">
            {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
            </p>
            
            </div>
            <div className="addCart_button">
                <button className="addCart" onClick={addToBasket}>
                    Add to Cart
                </button>
                </div>
        </div>
    </div>
  )
}

export default Product ;