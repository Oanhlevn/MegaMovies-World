import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import NavbarMovie from './Navbar'; 
import MoviesList from './MoviesList' ; 
import SAMPLE_DATA from './SampleData'
import Movie from './Movie';
import Pages from './pagination';
import { pageLoad } from './pagination';




class App extends Component {
  
  constructor() {
    super();
    
    this.state = { moviepage: { pagenum: 1, results: [], totalpage:"" } };
  }
   
  async componentDidMount()
  {const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=24e95e0df90e2e0f1ff3ec5771a83c6a&page=1";
  console.log(url);
  let result = await fetch(url);
   let movies = await result.json();
   let MOVIES = movies.results; 
   // console.log(MOVIES);
    this.setState({ moviepage:{...this.state.moviepage, returns: MOVIES, totalpage:movies.total_pages }   }, () => console.log(this.state.movieArr));
  }
  pageLoad = async pnum => {
    console.log(pnum);
    const api =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=24e95e0df90e2e0f1ff3ec5771a83c6a&page=";
    const url = api + pnum;
    console.log(url);
    let result = await fetch(url);
    let movies = await result.json();
    console.log(movies);
    this.setState({
      moviepage: { pagenum: pnum, results: movies.results, totalpage: movies.total_pages }}, () => console.log(this.state.moviepage.results));
  };
  
  render() {
        if(this.state.moviepage.results == null )
        { return <h3>fetching...</h3>}
        else {
    return (
      <div className="App">
      <NavbarMovie/> 
      <Container>
      <Jumbotron>
         <h4>Mega Movies World</h4>
        <hr></hr>
      </Jumbotron>
      <Row>
      <Col xs="3" sm="3" md="3" lg="3" xl="3"> Search Features
      </Col> 
      <Col xs="9"sm="9" md="9" lg="9" xl="9"> 
     <Row>
        <MoviesList
          listofmovie={this.state.moviepage.results}
        />
    <Pages pagenum = {this.state.moviepage.pagenum} pageLoad ={this.pageLoad} totalpage={this.state.moviepage.totalpage} /> 
     </Row>
      </Col>
      </Row> 
        </Container>
      </div>
    );}
  }
}

export default App;
