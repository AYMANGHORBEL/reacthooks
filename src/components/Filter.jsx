import React from 'react'
import StarRating from './StarRating'

const Filter = ({text,handleChange,rating,handleRating}) => {
  return (
    <div className='header-container'>
    <h3>Movie APP</h3>
    <div className='search-container'>

<form action="">
    <input type="text" value={text} onChange={handleChange} />
</form>
<StarRating rating={rating} handleRating={handleRating} />
    </div>

    </div>
  )
}

export default Filter
