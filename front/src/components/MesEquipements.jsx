import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './MesEquipements.scss';

class MesEquipements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      mark: '',
      model: '',
      use: '',
      consumption: '',
      cost: '',
      impact: '',
      url: '',
    }
  }


  render() {
    return (
      <Container fluid className="MesEquipements">
        <Row>
          <Col md="9" className="containerMesEquipements">
            <h2>Mes équipements</h2>
          </Col>
          <Col md="3" className="containerMaConsommation">

          </Col>
        </Row>
      </Container>
    )
  }
}

export default MesEquipements;