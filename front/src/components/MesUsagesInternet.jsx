import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './MesUsagesInternet.scss';


class MesUsagesInternet extends Component {
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
      <Container fluid className="MesUsagesInternet">
        <Row>
          <Col md="9" className="containerMesUsagesInternet">
            <h2>Mes usages Internet</h2>
          </Col>
          <Col md="3" className="containerMaConsommation">

          </Col>
        </Row>
      </Container>
    )
  }
}

export default MesUsagesInternet;