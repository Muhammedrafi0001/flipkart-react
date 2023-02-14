import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsData } from '../../data/ProductsData'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillThunderbolt, AiFillStar } from 'react-icons/ai'

import './ProductDetails.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../../slice/Cartslice'

const ProductDetails = () => {

  const [data, setData] = useState({})

  const { id } = useParams()
  const dispatch =useDispatch()

  useEffect(() => {
    const product = ProductsData.find((item) => {
      return item.id.toString() === id
    })
    setData(product)


  }, [id])

  const addToCart =()=>{
    dispatch(addCart(data))
    console.log(data);
  }





  return (
    <div className="all">
    <div className='ProductDetails_one'>
      <div className="ProductDetails_left">
        <div className="otherImgs">
          <img src={data.url} alt="" className='proimg' />
          <img src={data.url} alt="" className='proimg' />
          <img src={data.url} alt="" className='proimg' />
          <img src={data.url} alt="" className='proimg' />
          <img src={data.url} alt="" className='proimg' />
        </div>
        <div className="ProductDetails_Img">
          <img src={data.url} alt="" />
          <div className="ProductDetails_btns">
            <button className='ProductDetails_buttons' 
            onClick={addToCart}
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            <button className='ProductDetails_buttons'>
              <AiFillThunderbolt />
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="ProductDetails_right">
        <p className="ProductDetails_Name">{data.Product}</p>
        <div className="ratingsreviews">
          <div className="Star">
            {data.rating} <AiFillStar />
          </div>
          <div className="ratings">
            {data.reviews} Rating & {data.rating} Reviews
          </div>
        </div>
        <p className="price">${data.Sellingprice}</p>
        <p className="packfeef">+ $69 Secured Packing Fee</p>
        <p className="available">Available offers</p>
        <li className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
          <b>Bank offers</b>5% Cashback on Flipkart Axis Bank CardT&c
          </div>
        </li>
        <li className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
          <b>Partner Offer </b> Purchase now & get a surprise cashback coupon
          for January / February 2023Know More</div>
        </li>
        <li className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
          <b>Partner Offer </b> Sign up for Flipkart Pay Later and get Flipkart
          Gift Card worth up to ₹500*Know More</div>
        </li>
        <li className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
            alt=""
            height={20}
          />
          <div>
          <b> EMI starting </b> from ₹832/monthView Plans
          </div>
        </li>
        <div className="descriptions">
          <div className="colors">
            <p className="color">Color</p>
            <div className="colorimgs">
              <img src={data.url} alt="" />
              <img src={data.url} alt="" />
              <img src={data.url} alt="" />
            </div>
          </div>
          <div className="highlights">
            <p className="highlights_title">Highlights</p>
            <ul className="highlight">
              <li className="highlight_item">{data.Descripition}</li>
              <li className="highlight_item">{data.Display}</li>
              <li className="highlight_item">{data.Camera}</li>
              <li className="highlight_item">{data.Battery}</li>
              <li className="highlight_item">{data.Proccessor}</li>
            </ul>
          </div>
        </div>
        <div className="RatingsAndReviews">
          <p className="RatingsAndReviews_title">Rating & Reviews</p>
          <div className="RatingsAndReviews_container">
            <div className="RatingsAndReviews_stars">
              <p className="RatingsAndReviews_Review">
                {data.rating}<AiFillStar />
              </p>
              <p className="RatingsAndReviews_ratings">
                {data.rating}Rating & {data.reviews} Reviews
              </p>
            </div>
            <ul className="RatingsAndReviews_chats">
              <li>
                <p className="RatingsAndReviews_star"> 5 `</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: '80%'  }}></div>
                </div>
                50%
              </li>
              <li>
                <p className="RatingsAndReviews_star">4 `</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: '50%' }}></div>
                </div>
                55%
              </li>
              <li>
                <p className="RatingsAndReviews_star">3 `</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: '33.6%' }}></div>
                </div>
                33%
              </li>
              <li>
                <p className="RatingsAndReviews_star">2 ` </p>
                <div className="bar">
                  <div className="innerbar" style={{ width: '29.6%' }}></div>
                </div>
                29%
              </li>
              <li>
                <p className="RatingsAndReviews_star">1 `</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: '10%' }}></div>
                </div>
                10%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails
