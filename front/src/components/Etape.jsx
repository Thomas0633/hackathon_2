import React from 'react';
import './Etape.scss';

const Etape = ({image, titre, text}) => (
  <div>
    <img className="zoom" src={image} alt="des"/>
    <br/>
    <p className="etapetitle">
    {titre}</p><br/>
    <p className="etapep">
    {text}
    </p>
  </div>
      
)
 
export default Etape;