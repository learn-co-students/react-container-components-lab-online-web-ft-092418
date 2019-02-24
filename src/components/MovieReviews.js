// Code MovieReviews Here
import React from 'react';


const MovieReviews = (props) => 
<div className="review-list">
    {props.reviews.map(
        (review) => 
        <div className="review">
            <h3>{<a href={review.link.url} >{review.headline}</a>}</h3>
        </div>
    )}
</div>

 export default MovieReviews