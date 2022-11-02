import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form} from "react-bootstrap";
import axios from 'axios';
export default class SaveMovie extends Component{
    constructor(props){
        super(props);
        //setting up function for handling the inputs
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieDesc = this.onChangeMovieDesc.bind(this);
        this.onChangeMovieActor = this.onChangeMovieActor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //setting up the state
        this.state = {
            movieName : '',
            movieDesc : '',
            movieActor : ''
        }
    }

    onChangeMovieName(e){
        this.setState({movieName : e.target.value})
    }

    onChangeMovieDesc(e){
        this.setState({movieDesc : e.target.value})
    }

    onChangeMovieActor(e){
        this.setState({movieActor : e.target.value})
}
 
    onSubmit(e){
        e.preventDefault();
        const newMovieObj = {
            movieName : this.state.movieName,
            movieDesc : this.state.movieDesc,
            movieActor : this.state.movieActor
        };
        axios.post('http://localhost:4000/movies/save-movie',newMovieObj)
             .then (res => console.log(res.data));
            this.setState ({ movieName : '',movieDesc:'',movieActor:''})

    }
    render(){
        const btnstyle = {
            marginTop: "20px",
            alignItems: "center"
        }
        return(
            <div className="form-wrapper">
                <Form onSubmit= {this.onSubmit}>
                    <Form.Group controlId="movieName">
                        <Form.Label>Movie Name</Form.Label>
                        <Form.Control type="text"
                        value={this.state.movieName} 
                        onChange = {this.onChangeMovieName}/>
                    </Form.Group>
                    <Form.Group controlId="movieDesc">
                        <Form.Label>Movie Desc</Form.Label>
                        <Form.Control type="text"
                         value={this.state.movieDesc} 
                         onChange = {this.onChangeMovieDesc}/>
                    </Form.Group>
                    <Form.Group controlId="movieActor">
                        <Form.Label>Movie Actor</Form.Label>
                        <Form.Control type="text" 
                         value={this.state.movieActor}
                         onChange = {this.onChangeMovieActor}/>
                    </Form.Group>
                    <Button variant="success" size="lg" block="block" type="submit"
                     style= {btnstyle}>
                        Save Movie
                    </Button>
                </Form>
            </div>
        );
    }
}