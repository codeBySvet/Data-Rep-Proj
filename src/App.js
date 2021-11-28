
import './App.css';
import React, { Component } from 'react';

// Importing components which will be displayed on the page
import { Content } from './components/content';
import { Create } from './components/create';
import { Read } from './components/read';
import {Edit} from './components/edit';

//Importing boostrap library for navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

//Importing routing functionality to allow different components to be loaded in, depending on the URL
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//---------------------------------------------------------------------------------------------------------------

class App extends Component {
  render() {
    return (

      // Router tag here needs to wrap the entire div element (syntax requirement)
      <Router>
        <div className="App">

          {/* Setting up navbar */}
          <Navbar bg="dark" variant="dark">
            
            {/* Naming navbar icon and assigning the URL to load when clicked */}
            <Navbar.Brand href="/">Navbar</Navbar.Brand>

            {/* Naming each element in the navbar and assigning the URL to load when clicked */}
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <br />

          {/* Routing specific components to load when a corresponding URL is loaded */}
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/create' component={Create} exact />
            <Route path={"/edit/:id"} component={Edit}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
