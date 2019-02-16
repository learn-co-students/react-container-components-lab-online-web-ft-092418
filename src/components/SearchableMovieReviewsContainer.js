import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

const searchURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>' + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super() 

        this.state= {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch(searchURL) 
          .then(res => res.json())
          .then(reviews => {
            this.setState({
                reviews
            })
        })
    } 

    render() {
        return (
            <div className="searchable-movie-reviews"> 
              <MovieReviews reviews={this.state.reviews} /> 
              <form>
                  <input type="text" value="search-terms" onSubmit={this.componentDidMount} />
              </form>
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer;