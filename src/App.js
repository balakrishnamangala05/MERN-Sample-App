import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import SaveMovie from './components/save-movie.component';
import MovieList from './components/movie-list.component';
import EditMovie from './components/edit-movie.component';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
 
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={{ pathname: '/save-movie' }} className="nav-link">
                  MERN Example
                </Link>
              </Navbar.Brand>
              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={{ pathname: '/save-movie' }} className="nav-link">
                    Save Movie
                  </Link>
                </Nav>
                <Nav>
                  <Link to={{ pathname: '/movie-list' }} className="nav-link">
                    Movie List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
 
          <Container>
            <Row>
              <Col md={12}>
                <div className='wrapper'>
 
                  <Switch>
                    <Route
                      exact path="/" component={(props) => <SaveMovie {...props} />}>
                    </Route>
                    <Route
                      exact path="/save-movie" component={(props) => <SaveMovie {...props} />}>
                    </Route>
                    <Route
                      exact path="/edit-movie/:id" component={(props) => <EditMovie {...props} />}>
                    </Route>
                    <Route
                      exact path="/movie-list" component={(props) => <MovieList {...props} />}>
                    </Route>
                  </Switch>
 
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      </Router>
 
    </div>
  );
}
 
export default App;