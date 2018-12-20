import React from 'react';
import './Etape.scss';

const Etape = ({image, titre, text}) => (
  <div>
    <img  src={image} alt="des"/>
    <br/>
    <p className="etapetitle">
    {titre}</p><br/>
    <p className="etapep">
    {text}
    </p>
  </div>
      
)
 
export default Etape;