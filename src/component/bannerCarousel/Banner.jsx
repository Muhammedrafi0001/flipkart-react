import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Banner.css'

const Banner = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
    }
    return (
        <div className='BannerCarousel'>
            
            <Slider {...settings}>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            <img src={item.Imgsrc} alt='' className='BannerCarousel_Img' />
                        </div>
                    ))}

            </Slider>
        </div>
    )
}

export default Banner
