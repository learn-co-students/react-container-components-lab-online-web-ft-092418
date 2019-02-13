// Code MovieReviews Here
import React from "react"

const MovieReviews = props => {


  return (
    <div className="review-list">
      {props.reviews.map(movie => <div className="review"> {movie.display_title} </div>)}
    </div>
  )
}

export default MovieReviews
