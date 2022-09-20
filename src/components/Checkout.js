import React from 'react'
import '../helper/Checkout.css'
import CurrencyFormat from 'react-currency-format';
import BasketItem from './BasketItem'
import {useStateValue} from '../Contexts/StateInventory'
import { InsertEmoticon } from '@mui/icons-material';
import {getBasketTotal} from '../Contexts/Reducer'
function Checkout() {
  const [{basket},dispatch]=useStateValue();
  return (
     <div>
     <div className="banner">
    </div>
    <div className='checkout'>
    
        <div className="checkoutleft">
        <h1>Your Shopping Basket </h1>
        <div className="lineFirst"></div>
        {basket.map((element,index)=>{
          return (
            <BasketItem key={index} id={element.id} title={element.title} image={element.imageSrc} rating={element.rating} price={element.price}/>
          )
        })}
        {basket.length==0 && <h1 className='emptyCart'>YOUR CART IS EMPTY</h1>}
        </div>
        <div className="checkoutright">
        
        <div className="total_bill">
          <h1>
            PRICE DETAILS
          </h1>
          <div className="line"></div>
          <div className="subprices">
          <div className="row">
              <div className="col1">
                Price(4 items)
              </div>
              <div className="col2">
              <CurrencyFormat value={getBasketTotal(basket)} displayType={'text'} thousandSeparator={true} prefix={'₹'} renderText={value => <div className='total-bill'>
              {value}
              </div>} />
              
              </div>
            </div>
            <div className="row">
              <div className="col1">
              Delivery Charges
              </div>
              <div className="col2 green">
              FREE
              </div>
            </div>
          <div className="line extra-margin"></div>
          <div className="total">
            <div className="row">
              <div className="col1 heavy">
                Total Amount
              </div>
              <div className="col2 heavy">
              <CurrencyFormat value={getBasketTotal(basket)} displayType={'text'} thousandSeparator={true} prefix={'₹'} renderText={value => <div className='total-bill'>
              {value}
              </div>} />
              </div>
            </div>
            <div className="button">
            <button className='checkout_button'>Proceed to checkout</button>
            </div>
          </div>
          </div>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Checkout ;