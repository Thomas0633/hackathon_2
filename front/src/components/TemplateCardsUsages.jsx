import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';
import './TemplateCardsUsages.scss';

class TemplateCardsUsages extends React.Component{
  render() {
    return(
      <div>
      <Card className="cardsup">
        <CardHeader className="cardtitle"><i className="fas fa-headphones-alt"></i> {this.props.title}</CardHeader>
        <CardBody>
          <CardText>
            <span className="label">Combien d’onglets sont ouverts sur votre navigateur en moyenne ?</span> {this.props.nbongletsouverts} <br/>
            <span className="label">Combien de fois appuyez-vous par jour sur « Rechercher » de votre moteur de recherche ?</span> {this.props.nbrecherches} <br/>
            <span className="label">Combien de vidéos regardez-vous par jour ?</span> {this.props.nbvideos}
          </CardText>
        </CardBody>
        <CardFooter><span className="impactresult">Impact sur l'environement {this.props.impact}</span></CardFooter>
      </Card>
    </div>
    )
  }
}

 
export default TemplateCardsUsages;