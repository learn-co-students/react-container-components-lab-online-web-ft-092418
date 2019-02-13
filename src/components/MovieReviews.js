// Code MovieReviews Here
import React from 'react'

 const MovieReviews = ({ reviews }) => {
   
   return (
     <div className="review-list">
      {reviews.map((review, i) => <MovieReview title={review.display_title} headline={review.headline} key={i}/>)}
    </div>
  )
}

const MovieReview = ({ title, headline}) => {

  return(<div className="review"><h2>{title}</h2> <p>{headline}</p> </div>)
}

export default MovieReviews
