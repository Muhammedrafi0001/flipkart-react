import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../../component/login/Login'
import { removeCart } from '../../slice/Cartslice'

import './Cart.css'

const Cart = () => {
  const [active, setActive] = useState(1)
  const cartItems = useSelector((state) => state.cartData.cart)
  const user = useSelector((state) => state.userData.user)
  console.log(cartItems);

  const dispatch=useDispatch()

  const removeFromCart=(id)=>{
     dispatch(removeCart(id))
  }
const [isOpen,setOpen] =useState(false)


  return (
    <div className='Cart_main'>
      <div className="Cart_tabs">
        <p className={`flipkart ${active === 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        >
          Flipkart
        </p>
        <p className={`grocery ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          Grosery
        </p>
      </div>
      {
        user ? (
          <div className='Cart_itemss'>
            <div className="Cart_cantainer">
              {cartItems.map((item, index) => (
                <div className="Cart_item" key={index}>
                  <div className="Cart_item_left">
                    <img src={item.url} alt="" />
                  </div>
                  <div className="Cart_item_right">
                    <h3>{item.Product}</h3>
                    <p>
                      {item.Display}, {item.Description}
                    </p>
                    <p>${item.Sellingprice}</p>
                    <button className="Cart_item_btn" onClick={() =>removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>

              ))}

            </div>

          </div>
        ) : (
          <div className='Cart_items'>
            <div className="Cart_NoItems">
              <img
                src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                alt=""
                className='Cart_NoItemsImg'
              />
              <p className="Cart_NoItemsTitle">Missing Cart items?</p>
              <p className="Cart_NoItemsdes">Login to see the items you added pereviously</p>
              <button className='Cart_NoItemsBtn'onClick={() => setOpen(true)}>Login</button>
            </div>

          </div>
        )
      }
     <Login isOpen={isOpen} setOpen={setOpen}/> 
    </div>
  )
}

export default Cart
