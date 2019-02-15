import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'q1k6NUXSDvPZybJZAjYnUsyj3QCMDPqW';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    fetchReviews = (event) => {
        event.preventDefault()
        const urlWithQuery = URL + '&query=' + this.state.searchTerm
        fetch(urlWithQuery)
            .then(resp => {
                return resp.json()
            })
            .then(myJson => {
                this.setState({reviews: myJson.results})
            })
    }
    
    render () {
        return (
            <div className="searchable-movie-reviews">
                <h3>Movie Reviews Search Results</h3>
                <form onSubmit={(event) => this.fetchReviews(event)}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={event => this.handleInputChange(event)}></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
                </div>
        )
    }
}