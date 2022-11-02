import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Table  from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import axios from "axios";
import MovieTableRow from './MovieTableRow';

export default class MovieList extends Component{

    constructor (props){
        super(props);
        this.state = {
            movies : []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/movies')
            .then(res => {
                this.setState({
                    movies : res.data
                });
            }).catch((error)=>{
                console.log(error);
            })
    }
    movieDataTable(){
        return this.state.movies.map((res,i) =>{
            return <MovieTableRow obj={res} key={i} />;
        })
    }
    render(){
        return(
            <div class="table-wrapper">
                <h1>React List Movie Component</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Movie Name</th>
                            <th>Movie Desc </th>
                            <th>Movie Actor </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.movieDataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}