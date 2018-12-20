import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';
import './TemplateCards.scss';

  const TemplateCards = (props) => {
    return (
      <div>
        <Card className="cards">
          <CardHeader className="cardtitle"><img src={`${props.url}`} className="img" alt="picto"/> {props.title}</CardHeader>
          <CardBody>
            <CardText>
              <span className="label">Marque :</span> {props.mark} <br/>
              <span className="label">Modèle :</span> {props.model} <br/>
              <span className="label">Utilisation :</span> {props.use} <br/>
              <span className="label">Consomation énergetique :</span> {props.consumption} KWh <br/>
              <span className="label">Coût par année :</span> {props.cost} €
            </CardText>
          </CardBody>
          <CardFooter><span className="impactresult">{props.impact}</span></CardFooter>
        </Card>
      </div>
    );
  };
 
export default TemplateCards;