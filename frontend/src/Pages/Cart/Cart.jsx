import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoredContext'
const Cart = () => {
  const { cartItem, food_list, removeFromCart } = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Totle</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div key={index} className='cart-item-title cart-item-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p className='cross' onClick={()=> removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart
