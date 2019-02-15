// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
    
    function renderReviews  ()  {
        return reviews.map(review => {
            return <li>Title: {review.display_title}<p>--- {review.summary_short}</p></li>
        })
    }
    
    return (
        <ul className="review-list">{renderReviews()}</ul>
    )
}
export default MovieReviews