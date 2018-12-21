import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';
import './TemplateCards.scss';

const TemplateCards = (props) => {
  // eslint-disable-next-line default-case
  switch(props.title) {
    case 'ORDINATEUR':
      return (
        <div>
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
        </div>
      );
      break;
    case 'SON':
      return (
        <div>
          <Card className="cards">
            <CardHeader className="cardtitle"><i className="fas fa-headphones-alt"></i> {props.title}</CardHeader>
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
        </div>
      );
      break;
  }
};
 
export default TemplateCards;