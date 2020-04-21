import React from 'react';
import Routes from './routes';
import logo from './logo.png';

import { Navbar, Container, Row, Col } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar variant="light" sticky="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-center"
          />{' '}
          la choisie
        </Navbar.Brand>
    </Navbar>
      <Container>
        <Row>
          <Col><Routes /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
