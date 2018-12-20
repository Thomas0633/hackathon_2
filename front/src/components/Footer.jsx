import React, { Component } from "react";
import './Footer.scss';

class Footer extends Component {
  
  render() { 
    return ( 
      <div className="footer">
        <p>
          Made with <img src="./images/heart.png" alt="heart" /> by Green&Smart Team
        </p>
          <a href="https://fr.wikipedia.org/wiki/Conditions_g%C3%A9n%C3%A9rales_d%27utilisation" target="_blank">
          C.G.U.
          </a>
        <p>by{" "}
          <a href="https://theshiftproject.org/" target="_blank">
          The Shift Project
          </a>
        </p>
      </div>
     );
  }
}
 
export default Footer ;
