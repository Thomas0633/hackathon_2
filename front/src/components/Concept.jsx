import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Concept.scss';

class Concept extends Component {
  
  render() { 
    return ( 
      <div>
        <Row>
          <h4 className='titleconcept'>Notre Concept</h4>
          <p className="textconcept">
          <strong>MyDIGI’PACT</strong> s’appuie sur <a href="https://theshiftproject.org/" target="_blank" className="aconcept">The Shift Project</a>, think tank reconnu d’intérêt général dont la mission est d’éclairer et d’influencer le débat sur la transition énergétique, pour tendre vers la sobriété numérique.
          <br />
          <br />
          The Shift Project est soutenu par un réseau de partenaires français et internationaux et est financé par les cotisations des entreprises adhérentes, ou qui soutiennent des projets particuliers.
          <br />
          <br />
          Aujourd’hui le numérique offres d’énormes opportunités de technologies et d’usage mais il faut également considérer son coût environnemental, difficile à évaluer au niveau global.
          L’impact environnemental de la Transition Numérique devient néanmoins gérable si elle est plus sobre.
          <br />
          <br />
          My Digi’Pact considère que chacun peut agir dans son propre environnement : en étant bien informé et en adoptant les leviers de la sobriété, il est simple de s’engager pour diminuer son empreinte carbone.
          <br />
          <br />
          Par la mesure de vos équipements numériques et de vos usages, nous pouvons vous fournir votre bilan personnalisé qui vous permettra de visualiser votre empreinte carbone, et nous nous engageons à vous prodiguer recommandations et astuces pour vous soutenir dans votre engagement.
          </p>
        </Row>
      </div>
     );
  }
}
 
export default Concept ;