import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, NavDropdown} from 'react-bootstrap'


function App() {
  return (
    <main>
    <h1>test</h1>
    <Navbar>
    <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    Collapse
    </Navbar.Collapse>
  </Container>
    </Navbar>
    </main>
  );
}

export default App;