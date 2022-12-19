import React from 'react'

const StarRating = ({rating,handleRating}) => {
    function rtStars(x){
  let stars = []
  for (let i = 1; i <= 5; i++) {
    if(i<=x){
stars.push(
    <span onClick={()=>handleRating(i)} style={{color:"gold",fontSize:'20px',cursor:"pointer"}}  > ★ </span>
)
    }
    else stars.push(<span  onClick={()=>handleRating(i)} style={{color:"black",fontSize:'20px',cursor:"pointer"}}  > ★ </span>)
  }
  return stars
    }
  return (
    <div> {rtStars(rating)}  </div>
  )
}

export default StarRating;