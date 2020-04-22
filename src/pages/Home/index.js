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
    <Card.Img variant="top" src={"https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/94118887_103605674665714_304564819678199808_n.png?_nc_cat=109&_nc_sid=dd9801&_nc_eui2=AeExEsoB1DqqVj2zVL3VxXod5CdsUTpcu5XkJ2xROly7lfNyG7sRFwzEbCP9mXYNpxpL81S9KN8aewFTdEzaug5s&_nc_ohc=KqZrJtgHUMIAX9LiksG&_nc_ht=scontent.fcpq14-1.fna&oh=96c5a1fae976070342c7d7da1a07ced5&oe=5EC7BDCB"} />
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
<Row xs={1} md={2} lg={3} className="d-flex justify-content-center">
  <Col>
  <Card>
  <Card.Img variant="top" src={"https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/calca-comfort/calca-jogger-verde-militar-com-faixa-na-frente_323895_600_1.jpg"} />
  <Card.Body>
    <Card.Title>Calça Jogger Verde Militar </Card.Title>
    <Card.Text>
    Calça em helanca. Modelo jogger, com elástico no cós, bolsos frontais funcionais, faixas na frente.
    </Card.Text>
    <Card.Link href="https://api.whatsapp.com/send?phone=5519984154123&text=Oii%20La%20Choisie,%20gostei%20da%20Calça%20Jogger%20Verde%20Militar" 
        target="_blank">Gostei</Card.Link>
  </Card.Body>
</Card>
</Col>
  <Col><strong>EM BREVE!</strong></Col>
  <Col><strong>EM BREVE!</strong></Col>
  <Col><strong>EM BREVE!</strong></Col>
  <Col><strong>EM BREVE!</strong></Col>
  <Col><strong>EM BREVE!</strong></Col>
  <Col><strong>EM BREVE!</strong></Col>
  
</Row>


   </>);
  }
}

export default Home;
