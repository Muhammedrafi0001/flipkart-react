import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './ProductCarousel.css'
import { Link } from 'react-router-dom'
import CategoryBanner from '../CategoryBanner/CategoryBanner'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'


const Next = (props) => {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <MdArrowForwardIos
                style={{ color: "black", fontSize: 25, fontWeight: 900 }}
            />
        </div>
    )

}
const Prev = (props) => {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <MdArrowBackIosNew
                style={{ color: "black", fontSize: 25, fontWeight: 900 }}
            />
        </div>
    )

}





const ProductCarousel = ({ BgImg, Title, Data }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
    }
    return (
        <div className='CategoryCarousel'>
            <div className="Category_Carousel_left" style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}>
                <p className="CategoryCarousel_title">{Title}</p>
                <button className='CategoryCarousel_btn'>viwe All</button>
            </div>
            <div className="CategoryCarousel_right">
                <Slider
                    nextArrow={<Next />}
                    prevArrow={<Prev />}
                    {...settings}
                >
                    {
                        Data.map((item, index) => (
                            <Link key={index} to={'/Product'}>
                                <CategoryBanner
                                    ImgSrc={item.ImgSrc}
                                    Title={item.CategoryName}
                                    Brand={item.Brand}
                                />
                            </Link>

                        ))
                    }
                </Slider>
            </div>

        </div>
    )
}

export default ProductCarousel
