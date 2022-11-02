import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default class MovieTableRow extends Component{
    constructor(props){
        super(props);
        this.deleteMovie = this.deleteMovie.bind(this);
    }
    deleteMovie(){
        axios.delete('http://localhost:4000/movies/delete-movie/'+this.props.obj._id)
        .then((res) =>{
            console.log("Movie Successfully deleted!!!")
        }).catch((error) =>{
            console.log(error)
        })
    }
    render(){
        return(
            <tr>
                <td>{this.props.obj.movieName}</td>
                <td>{this.props.obj.movieDesc}</td>
                <td>{this.props.obj.movieActor}</td>
                <td>
                    <Link className="edit-link" to={{ pathname: '/edit-movie/'+this.props.obj._id }}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger" onClick={this.deleteMovie}>Delete</Button>
                </td>
            </tr>
        );
    }
}