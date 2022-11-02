import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form} from "react-bootstrap";
import axios from 'axios';
export default class EditMovie extends Component{
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

componentDidMount(){
    axios.get('http://localhost:4000/movies/view-movie/' + this.props.match.params.id)
    .then(res =>{
        this.setState({
            movieName : res.data.movieName,
            movieDesc : res.data.movieDesc,
            movieActor : res.data.movieActor
        })
    }).catch((error) =>{
        console.log(error)
    })
}
 
    onSubmit(e){
        e.preventDefault();
        const updateMovieObj = {
            movieName : this.state.movieName,
            movieDesc : this.state.movieDesc,
            movieActor : this.state.movieActor
        };
        axios.put('http://localhost:4000/movies/update-movie/' + 
                    this.props.match.params.id,
                    updateMovieObj).
                    then((res) => {
                        console.log(res.data)
                        console.log("Movie Successfully updated")
                    }).catch((error) =>{
                        console.log(error)
                    })
                    //redirect to movie list
                    this.props.history.push('/movie-list')
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
                        Update Movie
                    </Button>
                </Form>
            </div>
        );
    }
}