import React from 'react'

import './ProductCard.css'

const ProductCard = ({ Data }) => {
    return (
        <div className="ProductCard">
            <div className="ProductCard_Img">
                <img src={Data.url} alt="" />
            </div>
            <div className="ProductCard_details">
                <p className="ProductCard_Name">{Data.Product}</p>
                <div className="ratingsAndReviews">
                    <div className="stars">{Data.rating}◈</div>
                    <p className="ratings">Ratings & {Data.reviews} Reviews</p>
                </div>
                <ul className="productDetailscard_ProductDetails">
                    <li className="productDetailscard_ProductDetail">{Data.Descripition}</li>
                    <li className="productDetailscard_ProductDetail">{Data.Display}</li>
                    <li className="productDetailscard_ProductDetail">{Data.Camera}</li>
                    <li className="productDetailscard_ProductDetail">{Data.Proccessor}</li>
                </ul>
            </div>
            <div className="ProductCard_PricDelivery">
                <div className="ProductCard_PriceContainer">
                    <p className="ProductCard_Price">${Data.Sellingprice}</p>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"height={20} width={45}
                        alt=""  />
                </div>
                    <p className="ProductCard_freedel">Free delivery</p>
                    <p className="discount">
                        Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317/month
                    </p>
            </div>
        </div>


    )
}

export default ProductCard

