import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import MoviesList from "./MoviesList";
import Movie from "./Movie";


export default class Pages extends React.Component {
  constructor() {
    super();

    
  }

  // async componentDidMount() {
  // this.pageLoad(this.state.moviepage.pagenum);

//  componentWillUnmount() {
//      this.setState ({pagenum:"", results:[]});


render() {


  return (
    <div>
      <p>
        {/* <MoviesList
          pagenum={this.state.moviepage.pagenum}
          listofmovie={this.state.moviepage.results}
        />
       */}
      </p>
      <Pagination aria-label="Pages">
        <PaginationItem>
          <PaginationLink first href="#" onClick={() => this.props.pageLoad(1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            href="#"
            onClick={ () => this.props.pageLoad(this.props.pagenum - 1)}/>
        
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => this.props.pageLoad(1)} active>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => this.props.pageLoad(2)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => this.props.pageLoad(3)}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => this.props.pageLoad(4)}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => this.props.pageLoad(5)}>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            next
            href="#"
            onClick={() => this.props.pageLoad(this.props.pagenum + 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#"  onClick={() => this.props.pageLoad(this.props.totalpage)}/>
        </PaginationItem>
      </Pagination>
    </div>
  );
}
}
