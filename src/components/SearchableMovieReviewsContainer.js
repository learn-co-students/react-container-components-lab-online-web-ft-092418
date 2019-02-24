import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }


    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>
            <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer