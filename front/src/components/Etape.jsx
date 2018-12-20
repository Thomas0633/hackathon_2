import React from 'react';

const Etape = ({image, titre, text}) => (
  <div>
    <img  className="pb-4 zoom" src={image} alt="des"/><br/>
    {titre}<br/>
    {text}
  </div>
      
)
 
export default Etape;