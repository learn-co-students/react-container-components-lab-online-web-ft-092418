import React from 'react'

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        <ul>
            {reviews.map(r =><li className="review">{r.title}</li>)}
        </ul>
    </div>
)

export default MovieReviews 