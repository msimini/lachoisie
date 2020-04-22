import React, { Component, useState } from "react";

import { Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import './style.css';

library.add(fab, faComment);

class Home extends Component {

  state = {
    roupas: [
    {
      foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/calca-comfort/calca-jogger-verde-militar-com-faixa-na-frente_323895_600_1.jpg",
      texto_whatsapp: "da%20Calça%20Jogger%20Verde%20Militar",
      titulo: "Calça Jogger Verde Militar ",
      descrição: "Calça em helanca. Modelo jogger, com elástico no cós, bolsos frontais funcionais, faixas na frente.",
      elogio: "Gostei",
    },
    {
      foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/calca-comfort/calca-jogger-verde-militar-com-faixa-na-frente_323895_600_1.jpg",
      texto_whatsapp: "da%20Calça%20Jogger%20Verde%20Militar",
      titulo: "Calça Jogger Verde Militar ",
      descrição: "Calça em helanca. Modelo jogger, com elástico no cós, bolsos frontais funcionais, faixas na frente.",
      elogio: "Gostei2",
    }
  ]};

  render() {

    const { roupas } = this.state;

    return (
      <>
      <Card>
    <Card.Img id="banner-top" variant="top" src={"https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/94118887_103605674665714_304564819678199808_n.png?_nc_cat=109&_nc_sid=dd9801&_nc_eui2=AeExEsoB1DqqVj2zVL3VxXod5CdsUTpcu5XkJ2xROly7lfNyG7sRFwzEbCP9mXYNpxpL81S9KN8aewFTdEzaug5s&_nc_ohc=KqZrJtgHUMIAX9LiksG&_nc_ht=scontent.fcpq14-1.fna&oh=96c5a1fae976070342c7d7da1a07ced5&oe=5EC7BDCB"} />
    <Card.Body>
      <Card.Text>
        <p className="text-justify ">
        <strong>Bem vinda</strong> a nossa vitrine virtual! <br/><br/>
        🖥️ Loja Online.<br/>
        💌 Enviamos para todo Brasil.<br/>
        📍 Sumaré/SP.<br/>
        🛵 Entregas na região de Sumaré, Nova Odessa e Americana.<br/>
        <br/>
        <a href="https://www.instagram.com/explore/tags/uselachoisie/" target="_blank" rel="noopener noreferrer">#uselachoisie</a>  
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
<Row xs={1} md={2} lg={3} className="d-flex justify-content-center">
  { roupas.map(item => 
  <Col className="pt-3">
      <Card key={item.codigo} >
      <Card.Img variant="top" src={item.foto_url} />
      <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text>
        {item.descrição}
        </Card.Text>
        <Card.Link href={`https://api.whatsapp.com/send?phone=5519984154123&text=Oii%20La%20Choisie,%20gostei%20da%20${item.texto_whatsapp}`}
            target="_blank">{item.elogio} <FontAwesomeIcon icon={faComment}  /></Card.Link>
      </Card.Body>
    </Card>
  </Col>
  )
  }
  
</Row>


   </>);
  }
}

export default Home;
