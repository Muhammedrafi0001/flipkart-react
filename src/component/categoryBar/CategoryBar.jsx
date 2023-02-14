import React from 'react'

import './CategoryBar.css'

const CategoryBar = ({Imgsrc, CategoryName}) => {
  return (
    <div className='CategoryBar'>
      <div className="Category_Img">
        <img src={Imgsrc} alt={CategoryName}/>
      </div>
      <p className="CategoryBar_Name">{CategoryName}</p>
    </div>
  )
}

export default CategoryBar
