import React from 'react';
import './MesAstuces.scss';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Row } from 'reactstrap';

  const MesAstuces = (props) => {
    return (
      <div>
        <Row>
          <Card className="conseilcard">
            <CardImg top width="100%" src="./images/search.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className="cardstitleconseil">Navigation & Mails</CardTitle>
              <CardText>
                <p className="textastuce">
              -    Utilisez Cleanfox permettant à tous les possesseurs d’un compte Gmail de se désabonner des newsletters reçues et non lues <br />
              -    Evitez les moteurs de recherche et rendez-vous directement sur la page <br />
              -    Eviter d’ouvrir plusieurs onglets à la fois <br />
              -    Lutter contre les spams permet aussi de limiter l’empreinte carbone <br />
              -    Changer de moteur de recherche (Notre conseil : Lilo)
              </p>
              </CardText>
            </CardBody>
          </Card>

          <Card className="conseilcard">
            <CardImg top width="100%" src="./images/tablette.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className="cardstitleconseil">Smartphones & Tablettes</CardTitle>
              <CardText>
                <p className="textastuce">
              -    Ménagez votre batterie <br />
              -    Notifications : n’hésitez pas à désactiver celles qui sont inutiles <br />
              -    Wi-fi, bluetooth, géolocalisation : ces applications énergivores ne devraient être activées qu’en cas de besoin <br />
              -    Réduisez la luminosité, choisissez un fond d’écran sombre, évitez le vibreur, désactivez les sons et alarmes <br />
              -    Préférez la wi-fi à la 4G et passez au mode avion lorsque c’est possible
              </p>
              </CardText>
            </CardBody>
          </Card>
        </Row>

        <Row>
          <Card className="conseilcard">
            <CardImg top width="100%" src="./images/ecoconception.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className="cardstitleconseil">Éco-Conception</CardTitle>
              <CardText>
                <p className="textastuce">
              -    Pensez réparation plutôt que remplacement <br />
              -    Moduler les logiciels et apps <br />
              -    Concevoir des programmes informatiques et équipements sobres <br />
              -    Limitez l’obsolescence due aux softwares <br />
              - Augmenter la durée de vie de nos appareils informatiques et limiter les achats compulsifs
              </p>
              </CardText>
            </CardBody>
          </Card>

          <Card className="conseilcard">
            <CardImg top width="100%" src="./images/equipementintell.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className="cardstitleconseil">Smart Utilisation</CardTitle>
              <CardText>
                <p className="textastuce">
              -    Faites la chasse aux appareils qui restent en veille : téléviseur, consoles de jeu, ordinateur, chargeur <br />
              -    Utilisez des équipements tels que des multiprises avec interrupteurs, prises coupe-veille, logiciels gestionnaires d’énergie. <br />
              </p>
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </div>
    );
  };
 
export default MesAstuces ;