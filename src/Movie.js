import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, col, CardColumns} from 'reactstrap';
import MoviesList from './MoviesList'; 
  
export default class Movie extends React.Component{
    constructor() {
        super();
      }
    
   
render(){ return (
    
    <Card>
    <CardImg top width="100%" src={"https://image.tmdb.org/t/p/w500"+ this.props.movie.poster_path} alt="Card image cap" />
  <CardBody>
    <CardTitle><p class="font-weight-bold">{this.props.movie.title }</p></CardTitle>
    <CardSubtitle>{this.props.movie. release_date} </CardSubtitle>
    <CardText>{this.props.movie.overview}</CardText>
    
    <Button>Button</Button>
  </CardBody>
</Card> 

)
}

}
