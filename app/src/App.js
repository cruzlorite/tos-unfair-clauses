import React from 'react';
import { Container, Navbar, FormControl, Button } from 'react-bootstrap';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">My React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl type="text" placeholder="Enter terms of service url..." className="mr-sm-2" />
            <Button variant="primary">Load</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <footer className="bg-dark text-light py-3 mt-5 footer">
        <Container>
          <p className="mb-0 text-center">© 2024 My React App</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
