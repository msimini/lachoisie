import React, { Component } from "react";

import { Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'

import facebookcover from './facebook-cover.png';

import './style.css';

library.add(fab);


class Home extends Component {
  render() {
    return (
      <>
      <Card>
    <Card.Img variant="top" src={facebookcover} />
    <Card.Body>
      <Card.Text>
        <strong>Bem vinda</strong> a nossa vitrine virtual: <br/>
        <a href="https://www.facebook.com/lachoisieboutique/" target="_blank" rel="noopener noreferrer" id="icon-face" >
          <FontAwesomeIcon icon={["fab", "facebook"]}  size="4x" /></a>
        <a href="https://www.instagram.com/lachoisieboutique/" target="_blank" rel="noopener noreferrer" id="icon-insta">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="4x" /></a>
        <a href="https://api.whatsapp.com/send?phone=5519984154123&text=Oii,%20gostaria%20de%20conhecer%20mais%20a%20La%20Choisie!%20%F0%9F%91%97" 
          target="_blank" rel="noopener noreferrer" id="icon-whatsapp"><FontAwesomeIcon icon={["fab", "whatsapp"]}  size="4x" /></a>
      </Card.Text>
    </Card.Body>
  </Card>
  <br/>
<Row xs={1} md={2} lg={4}>
  <Col><strong>EM BREVE!</strong></Col>
  <Col><strong>EM BREVE!</strong></Col>
  <Col><strong>EM BREVE!</strong></Col>
  <Col><strong>EM BREVE!</strong></Col>
</Row>
  
   </>);
  }
}

export default Home;