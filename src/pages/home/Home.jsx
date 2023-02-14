import React from 'react'

import './Home.css'

import { CategoryBarData, CarouselData, BestOf } from '../../data/data'
import CategoryBar from '../../component/categoryBar/CategoryBar'
import Banner from '../../component/bannerCarousel/Banner'
import ProductCarousel from '../../component/productCarousel/ProductCarousel'

const Home = () => {
  return (
    <div className='Home'>
      <div className="Home_Category_Cotainer">
        <div className="Home_Category_Bar">
          {CategoryBarData.map((item, index) => (
            <CategoryBar
              key={index}
              Imgsrc={item.imageSrc}
              CategoryName={item.category}

            />
          ))}
        </div>
      </div>
      <div className="Home_container">
        <div className="Home_carousel">
          <Banner data={CarouselData} />
        </div>
        <div className="Home_ProductCarousel">

          <ProductCarousel
            BgImg=
            {
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Electronics"}
            Data={BestOf.Electronics}
          />

          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Beauty,Food,Toys"}
            Data={BestOf.Electronics}
          />

          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Winter Essentials"}
            Data={BestOf.Electronics}

          />

          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Wedding & Gifting Specials"}
            Data={BestOf.Electronics}

          />


        </div>

      </div>
    </div>
  )
}

export default Home
