import React from 'react'

import './CategoryBanner.css'

const CategoryBanner = ({ Brand, ImgSrc, Title }) => {
    return (
        <div className='CategoryBanner'>
            
            <img
                src={ImgSrc} alt="" className='CategoryBanner_img'
            />
            <p className="CategoryBanner_title">{Title.length < 25 ? Title : Title.slice(0, 25) + "..."}</p>
            <p className="CategoryBanner_shopNow">Shop NOw</p>
            <p className="CategoryBanner_Brand">{Brand}</p>
        </div>
    )
}

export default CategoryBanner
