import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardColumns } from 'reactstrap';
import Movie from './Movie';
  
export default class MoviesList extends React.Component{
    constructor() {
        super();
    }
render(){ 
    if ( this.props.listofmovie)
    {
    return ( 
       <Row>
    {this.props.listofmovie.map (movie => 
         <Col sx="3" sm="3" md="3" lg="3" xl="3">
         <Movie movie= {movie} 
         />
         </Col> 
         )}
         </Row>
          );
    }
    else 
    { return (
    <h1>No Movies!</h1> );
    
    }     

   
        
  }

}

    


 

