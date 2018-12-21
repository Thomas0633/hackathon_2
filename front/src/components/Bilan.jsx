import React, { Component } from 'react';
import './bilan.scss';
import { Progress, Container } from 'reactstrap';

class Bilan extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Container>
        <hr/>
        <h1>Votre bilan !</h1>

        <h2>Bilan total</h2>
        <div className="text-center">70%</div>
        <Progress value={70} /><br />

        <h2>Impact carbonne de vos équiments :</h2>
        <div className="text-center">75%</div>
        <Progress value={75} color="danger"/><br />

        <h2>Impact carbonne de votre usage internet :</h2>
        <div className="text-center">55%</div>
        <Progress value={55} color="warning"/><br />

      </Container>
    );
  }
}

export default Bilan;