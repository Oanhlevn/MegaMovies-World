import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, col, CardColumns
} from 'reactstrap';
import MoviesList from './MoviesList';
import { getPriority } from 'os';
import TrailerModal from './TrailerModal';

export default class Movie extends React.Component {
  constructor() {
    super();
    this.state = { isModalOpen: false }
  }

  showTrailerModal() {
    console.log('click')
    this.setState({ isModalOpen: true });
  }
  render() {
    return (

      <Card>
        <CardImg top width="100%" src={"https://image.tmdb.org/t/p/w500" + this.props.movie.poster_path} alt="Card image cap" />
        <CardBody>
          <CardTitle><p class="font-weight-bold">{this.props.movie.title}</p></CardTitle>
          <CardSubtitle>Date: {this.props.movie.release_date} </CardSubtitle>
          <CardText>Rating: {this.props.movie.vote_average}  </CardText>


          {/* <CardText>{this.props.movie.overview}</CardText> */}

          <Button color="danger" onClick={() => this.showTrailerModal()}>Trailer</Button>
          <TrailerModal isOpen={this.state.isModalOpen} />
        </CardBody>
      </Card>

    )
  }

}
