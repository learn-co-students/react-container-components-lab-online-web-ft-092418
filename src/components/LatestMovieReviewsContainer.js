import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KMnIdOkJ0MHoIARh7O0jhAvfmiyC9YzE';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state={
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL).then(resp => resp.json()).then(jsonData => this.setState({reviews: jsonData.results }))
  }

  render(){
    return (<div className="latest-movie-reviews"><h2>Latest Reviews</h2><MovieReviews reviews={this.state.reviews}/></div>)
  }
}
