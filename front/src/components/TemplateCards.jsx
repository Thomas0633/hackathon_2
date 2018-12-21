import React from 'react';
import { Col, Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';
import './TemplateCards.scss';

const TemplateCards = (props) => {
  // eslint-disable-next-line default-case
  switch(props.title) {
    case 'ORDINATEUR':
      return (
        <Col md="4">
          <Card className="cards">
            <CardHeader className="cardtitle"><i className="fas fa-laptop"></i> {props.title}</CardHeader>
            <CardBody>
              <CardText>
                <span className="label">Marque :</span> {props.mark} <br/>
                <span className="label">Modèle :</span> {props.model} <br/>
                <span className="label">Utilisation :</span> {props.use} <br/>
                <span className="label">Consommation énergétique :</span> {props.consumption} KWh <br/>
                <span className="label">Coût par année :</span> {props.cost} €
              </CardText>
            </CardBody>
            <CardFooter><span className="impactresult">Impact sur l'environement {props.impact}</span></CardFooter>
          </Card>
        </Col>
      );
      break;
    case 'ENCEINTE':
      return (
        <Col md="4">
          <Card className="cards">
            <CardHeader className="cardtitle"><i className="fas fa-volume-up"></i> {props.title}</CardHeader>
            <CardBody>
              <CardText>
                <span className="label">Marque :</span> {props.mark} <br/>
                <span className="label">Modèle :</span> {props.model} <br/>
                <span className="label">Utilisation :</span> {props.use} <br/>
                <span className="label">Consommation énergétique :</span> {props.consumption} KWh <br/>
                <span className="label">Coût par année :</span> {props.cost} €
              </CardText>
            </CardBody>
            <CardFooter><span className="impactresult">Impact sur l'environement {props.impact}</span></CardFooter>
          </Card>
        </Col>
      );
      break;
    case 'TABLETTE':
      return (
        <Col md="4">
          <Card className="cards">
            <CardHeader className="cardtitle"><i className="fas fa-tablet-alt"></i> {props.title}</CardHeader>
            <CardBody>
              <CardText>
                <span className="label">Marque :</span> {props.mark} <br/>
                <span className="label">Modèle :</span> {props.model} <br/>
                <span className="label">Utilisation :</span> {props.use} <br/>
                <span className="label">Consommation énergétique :</span> {props.consumption} KWh <br/>
                <span className="label">Coût par année :</span> {props.cost} €
              </CardText>
            </CardBody>
            <CardFooter><span className="impactresult">Impact sur l'environement {props.impact}</span></CardFooter>
          </Card>
        </Col>
      );
      break;
    case 'SMARTPHONE':
      return (
        <Col md="4">
          <Card className="cards">
            <CardHeader className="cardtitle"><i className="fas fa-mobile-alt"></i> {props.title}</CardHeader>
            <CardBody>
              <CardText>
                <span className="label">Marque :</span> {props.mark} <br/>
                <span className="label">Modèle :</span> {props.model} <br/>
                <span className="label">Utilisation :</span> {props.use} <br/>
                <span className="label">Consommation énergétique :</span> {props.consumption} KWh <br/>
                <span className="label">Coût par année :</span> {props.cost} €
              </CardText>
            </CardBody>
            <CardFooter><span className="impactresult">Impact sur l'environement {props.impact}</span></CardFooter>
          </Card>
        </Col>
      );
      break;
    case 'CONSOLE DE JEUX':
      return (
        <Col md="4">
          <Card className="cards">
            <CardHeader className="cardtitle"><i className="fas fa-gamepad"></i> {props.title}</CardHeader>
            <CardBody>
              <CardText>
                <span className="label">Marque :</span> {props.mark} <br/>
                <span className="label">Modèle :</span> {props.model} <br/>
                <span className="label">Utilisation :</span> {props.use} <br/>
                <span className="label">Consommation énergétique :</span> {props.consumption} KWh <br/>
                <span className="label">Coût par année :</span> {props.cost} €
              </CardText>
            </CardBody>
            <CardFooter><span className="impactresult">Impact sur l'environement {props.impact}</span></CardFooter>
          </Card>
        </Col>
      );
      break;
    case 'IMPRIMANTE':
      return (
        <Col md="4">
          <Card className="cards">
            <CardHeader className="cardtitle"><i className="fas fa-print"></i> {props.title}</CardHeader>
            <CardBody>
              <CardText>
                <span className="label">Marque :</span> {props.mark} <br/>
                <span className="label">Modèle :</span> {props.model} <br/>
                <span className="label">Utilisation :</span> {props.use} <br/>
                <span className="label">Consommation énergétique :</span> {props.consumption} KWh <br/>
                <span className="label">Coût par année :</span> {props.cost} €
              </CardText>
            </CardBody>
            <CardFooter><span className="impactresult">Impact sur l'environement {props.impact}</span></CardFooter>
          </Card>
        </Col>
      );
      break;
    case 'TELEVISION':
      return (
        <Col md="4">
          <Card className="cards">
            <CardHeader className="cardtitle"><i className="fas fa-tv"></i> {props.title}</CardHeader>
            <CardBody>
              <CardText>
                <span className="label">Marque :</span> {props.mark} <br/>
                <span className="label">Modèle :</span> {props.model} <br/>
                <span className="label">Utilisation :</span> {props.use} <br/>
                <span className="label">Consommation énergétique :</span> {props.consumption} KWh <br/>
                <span className="label">Coût par année :</span> {props.cost} €
              </CardText>
            </CardBody>
            <CardFooter><span className="impactresult">Impact sur l'environement {props.impact}</span></CardFooter>
          </Card>
        </Col>
      );
      break;
  }
};
 
export default TemplateCards;