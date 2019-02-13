import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = searchTerm => (`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<${searchTerm}>?api-key=${NYT_API_KEY}`);

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }


  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchReviews(this.state.searchTerm)
  }

  fetchReviews = searchTerm => {
    fetch(URL(searchTerm))
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(movies) {
        console.log(movies)
        console.log(movies.results)
        this.setState({
          reviews: movies.results
        })
      });
    }

  render() {
    return (
      <div className="searchable-movie-reviews" >
        <MovieReviews reviews={this.state.reviews} />

      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
      </form>
    </div>
    )
  }
}
