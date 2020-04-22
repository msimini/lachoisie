import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap'

import Routes from './routes';
import logo from './logo.png';

import './App.css';

library.add(fab);

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
          <Nav className="mr-auto align-right">
          <Nav.Link href="https://www.facebook.com/lachoisieboutique/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x"/></Nav.Link>
          <Nav.Link href="https://www.instagram.com/lachoisieboutique/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" /></Nav.Link>
          <Nav.Link href="https://api.whatsapp.com/send?phone=5519984154123&text=Oii,%20gostaria%20de%20conhecer%20mais%20a%20La%20Choisie!%20%F0%9F%91%97" 
          target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "whatsapp"]}  size="2x" /></Nav.Link>
    </Nav>
    </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col><Routes /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
