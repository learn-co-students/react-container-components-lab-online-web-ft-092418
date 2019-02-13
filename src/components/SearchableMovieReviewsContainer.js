import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KMnIdOkJ0MHoIARh7O0jhAvfmiyC9YzE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='


// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends React.Component{

  constructor(){
    super()
    this.state = {searchTerm: "", reviews: []}
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  fire = (event) => {
    event.preventDefault()
    fetch(URL + `${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(jsonData => this.setState({reviews: jsonData.results}))
  }

  render(){
    return (<div className="searchable-movie-reviews">
      <form onSubmit={this.fire}>
        <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
        <input type="submit" />
      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>)
  }
}
