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
              -    Utiliser Cleanfox permettant à tous les possesseurs d’un compte Gmail de se désabonner des newsletters reçues et non lues <br />
              -    Eviter les moteurs de recherche et rendez-vous directement sur la page <br />
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
              -    {" "}Ménager sa batterie <br />
              -    Notifications : ne pas hesiter à désactiver celles qui sont inutiles <br />
              -    Wi-fi, bluetooth, géolocalisation : ces applications énergivores ne devraient être activées qu’en cas de besoin <br />
              -    Réduire la luminosité, choisir un fond d’écran sombre, éviter le vibreur, désactiver les sons et alarmes <br />
              -    Préférer la wi-fi à la 4G et passer au mode avion lorsque c’est possible
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
              -    Penser réparation plutôt que remplacement <br />
              -    Moduler les logiciels et apps <br />
              -    Concevoir des programmes informatiques et équipements sobres <br />
              -    Limiter l’obsolescence due aux softwares <br />
              -    Augmenter la durée de vie de nos appareils informatiques et limiter les achats compulsifs
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
              -    Faire la chasse aux appareils qui restent en veille : téléviseur, consoles de jeu, ordinateur, chargeur <br />
              -    Utiliser des équipements tels que des multiprises avec interrupteurs, prises coupe-veille, logiciels gestionnaires d’énergie.
              </p>
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </div>
    );
  };
 
export default MesAstuces ;