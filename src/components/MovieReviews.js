// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => 
    <div className="review-list">{props.reviews.map((review) =>
        <ul className="review">
            <h3>{<a href={review.link.url} >{review.headline}</a>}</h3>
        </ul>
    )}
    </div>

export default MovieReviews

// You are free to lay out each review as you like using the data that the API returns, but make sure that the component outputs a top-level element with the class review-list and that each review is wrapped by an element with class review.
