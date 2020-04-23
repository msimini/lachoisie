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
        texto_whatsapp: "Calça%20Jogger%20Verde%20Militar",
        titulo: "Calça Jogger Verde Militar ",
        descrição: "Calça em helanca. Modelo jogger, com elástico no cós, bolsos frontais funcionais, faixas na frente.",
        elogio: "Fale Conosco",
    codigo: 3238951
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-manga-curta/t-shirt-preta-decote-v-e-estampa-frontal_311735_600_1.jpg",
        texto_whatsapp: "T-shirt%20Preta%20com%20Estampa%20Frontal",
        titulo: "T-Shirt Preta com Estampa Frontal",
        descrição: "Blusa em meia malha de algodão. Modelo com decote em V, mangas curtas, barra arredondada e estampa frontal.",
        elogio: "Fale Conosco",
    codigo: 3117359
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/body/body-soltinho-telha-com-mangas-e-franzidos_321061_600_1.jpg",
        texto_whatsapp: "Body%20Telha%20com%20Mangas%20Bufantes",
        titulo: "Body Telha com Mangas Bufantes",
        descrição: "Body em malha de viscose com elastano. Modelo soltinho. Decote canoa com elástico e franzidos. Mangas bufantes com franzidos no punho. Fecho em colchetes entrepernas.",
        elogio: "Fale Conosco",
    codigo: 3210614
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-floral-poa-preto-com-sobreposicao_320363_600_1.jpg",
        texto_whatsapp: "Vestido%20Floral%20Poá%20Preto",
        titulo: "Vestido Floral Poá Preto",
        descrição: "Vestido em malha de viscose com elastano. Modelo de alça com sobreposição de tule, mangas longas com elástico no punho formando babado, ombros franzidos e recorte na cintura. Comprimento curto",
        elogio: "Fale Conosco",
    codigo: 3203635
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-manga-curta/t-shirt-branca-com-bolso-e-bordado_319821_600_1.jpg",
        texto_whatsapp: "T-Shirt%20Branca%20com%20Bolso%20Bordado",
        titulo: "T-Shirt Branca com Bolso e Bordado",
        descrição: "Em malha de algodão. Decote redondo, mangas curtas, bolso e bordado.",
        elogio: "Fale Conosco",
    codigo: 3198218
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/pantacourt/calca-pantacourt-caramelo-com-botoes-laterais_312252_600_1.jpg",
        texto_whatsapp: "Pantacourt%20Caramelo%20com%20Botões%20Laterais",
        titulo: "Pantacourt Caramelo com Botões Laterais",
        descrição: "Calça Pantacourt em helanca. Modelo com botões decorativos nas laterais, possui elástico na cintura. Cintura: alta.",
        elogio: "Fale Conosco",
    codigo: 3122524
      },
      {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-manga-curta/blusa-com-alcas-para-amarrar-geometrico-verde_316246_600_1.jpg",
        texto_whatsapp: "Blusa%20Geométrica%20Verde",
        titulo: "Blusa Geométrica Verde",
        descrição: "Blusa em malha de viscose com elastano. Modelo ciganinha com alças em cadarço para amrração, elástico no decote e mangas amplas.",
        elogio: "Fale Conosco",
    codigo: 3162460
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/saia-midi/saia-midi-preta-com-recorte-frontal_316268_600_1.jpg",
        texto_whatsapp: "Saia%20Midi%20Preta%20Com%20Recorte%20Frontal",
        titulo: "Saia Midi Preta Com Recorte Frontal",
        descrição: "Saia em malha de viscose com elastano. Modelo com elástico no cós, frente transpassada, recorte na barra formando franzido e tira para amarrar na lateral. Comprimento midi. Cintura: alta.",
        elogio: "Fale Conosco",
    codigo: 3162682
      },
    {
        foto_url: "https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/jaqueta/jaqueta-bomber-preta-e-floral_228577_1000_4.jpg",
        texto_whatsapp: "Jaqueta%20Bomber%20Preta%20e%20Floral",
        titulo: "Jaqueta Bomber Preta e Floral",
        descrição: "Jaqueta Greice confeccionada em helanca. Punhos e decote em ribana. Modelo bomber, de mangas longas com fechamento frontal em zíper destacável.",
        elogio: "Fale Conosco",
    codigo: 2285774
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-de-alca/blusa-de-alcas-off-white-com-decote-degage_320426_600_1.jpg",
        texto_whatsapp: "Blusa%20Off%20White%20com%20Decote%20Degagê",
        titulo: "Blusa Off White com Decote Degagê",
        descrição: "Blusa em tecido creponado com leve transparência. Decote frente degagê (gola boba) e alças com regulagem.",
        elogio: "Fale Conosco",
    codigo: 3204264 
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-manga-curta/blusa-preto-cobra_320616_600_1.jpg",
        texto_whatsapp: "Blusa%20Preta%20Cobra",
        titulo: "Blusa Preta Cobra",
        descrição: "Blusa em malha de moletinho de algodão com poliester. Modelo t-shirt, manga curta, gola e punhos molde, frente com detalhe estampado e friso metalizado.",
        elogio: "Fale Conosco",
    codigo: 3206166
      },
      {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/pantacourt/calca-preta-cobra_320615_600_1.jpg",
        texto_whatsapp: "Pantacourt%20Preta%20Cobra",
        titulo: "Pantacourt Preta Cobra",
        descrição: "Calça em malha de moletinho de algodão com poliéster. Cintura com elástico e punhos na barra. Detalhe em tecido metalizado nas laterais.",
        elogio: "Fale Conosco",
    codigo: 3206150
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/calca-pantalona/calca-pantalona-com-fendas-e-amarracao-marinho_307699_600_1.jpg",
        texto_whatsapp: "Calça%20Pantalona%20Marinho%20com%20Fendas",
        titulo: "Calça Pantalona Marinho com Fendas",
        descrição: "Calça confeccionada em helanca. Modelo pantalona, com elástico no cós, faixas para amarração frontal e detalhe de fendas lateral da barra.",
        elogio: "Fale Conosco",
    codigo: 3076997
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-manga-curta/blusa-mangas-curtas-com-estampa-ombros-branca_322939_600_1.jpg",
        texto_whatsapp: "Blusa%20Estampada%20Ombros%20Branca",
        titulo: "Blusa Estampada Ombros Branca",
        descrição: "Blusa em malha de viscose. Modelo com decote redondo, mangas curtas, estampa nos ombros e recorte no centro das costas.",
        elogio: "Fale Conosco",
    codigo: 3229391
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-de-alca/blusa-bata-com-alcas-finas-e-estampa-de-onca_319064_600_1.jpg",
        texto_whatsapp: "Bata%20Estampada%20Onça",
        titulo: "Bata Estampada Onça",
        descrição: "Blusa, em helanca. Modelo com alças finas, estampa de onça.",
        elogio: "Fale Conosco",
    codigo: 3190640
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/casaquinho/casaco-chumbo-alongado-com-perolas-no-ombro_315375_600_1.jpg",
        texto_whatsapp: "Casaco%20Chumbo%20Alongado%20com%20Pérolas",
        titulo: "Casaco Chumbo Alongado com Pérolas",
        descrição: "Casaco em algodão com poliéster. Modelo alongado, com mangas longas, detalhe em pérolas e abertura frontal.",
        elogio: "Fale Conosco",
    codigo: 3153750
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-manga-curta/t-shirt-quadriculada-com-gota_319823_600_1.jpg",
        texto_whatsapp: "T-Shirt%20Quadriculada",
        titulo: "T-Shirt Quadriculada",
        descrição: "Em malha de algodão. Decote redondo com gota, mangas curtas.",
        elogio: "Fale Conosco",
    codigo: 3198230
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/blusa-manga-curta/blusa-basica-decote-redondo-rosa-pink_324220_600_1.jpg",
        texto_whatsapp: "Blusa%20Básica%20Pink",
        titulo: "Blusa Básica Pink",
        descrição: "Blusa em malha de viscose com elastano. Modelo com decote redondo e mangas curtas.",
        elogio: "Fale Conosco",
    codigo: 3242205
      },
    {
        foto_url: "https://cdn1.loghaus.com.br/imagens01/foto/moda-feminina/t-shirt/t-shirt-com-termocolantes-frontal-branca_324184_301_1.jpg",
        texto_whatsapp: "T-Shirt%20Branca%20Choose",
        titulo: "T-Shirt Branca Choose",
        descrição: "Blusa em malha de algodão. Modelo com recote redondo, mangas curtas e estampa frontal lettering com apliques de termocolantes.",
        elogio: "Fale Conosco",
    codigo: 3241840
      },
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
        <strong>Bem vinda</strong> à nossa vitrine virtual! <br/><br/>
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
      <Card key={item.codigo} className="w-100 h-100">
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
