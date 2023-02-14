import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../component/productCard/ProductCard'

import { ProductsData } from '../../data/ProductsData'
import ProductDetails from '../poroductdetailse/ProductDetails'


import './Product.css'

const Product = () => {
  return (
    <div className="Product">
      <div className="Product_filters">
        <p className="filter_head">Filter</p>
        <div className="category">
          <p className="filter_category_Head">Categorys</p>
          <div className="filter_category">Mobail</div>
        </div>
        <div className="Price">
          <p className="price_Head">Price</p>
          <input type="range" name="" id="" className="pracerange" />
          <div className="price_input">
            <input value="0" className="priceBox" /><p>to</p>
            <input value="10000" className="priceBox" />
          </div>
        </div>
        <div className="brand_name">
          <p>Brand</p>
        </div>
      </div>

      <div className="Product_items">
        <p className="totalresults">
          Showing 1-{ProductsData.length} of {ProductsData.length} results</p>
        <div className="sortBy">
          <p>Sort by</p>
          <ul className="sortitems">
            <li className="sortitem">Relevence</li>
            <li className="sortitem">Popularity</li>
            <li className="sortitem">Price - Low to high</li>
            <li className="sortitem">Price - High to Low</li>
            <li className="sortitem">New Filter</li>
          </ul>
        </div>

        <div>

          {
            ProductsData.map((item, index) => (
              <Link key={index} to={`/productdetails/${item.id}`}>
                <ProductCard Data={item} />
              </Link>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Product
