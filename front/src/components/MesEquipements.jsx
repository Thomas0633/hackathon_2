import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
import './MesEquipements.scss';
import equipements from '../equipements.json';
import TemplateCards from './TemplateCards';
import Zoom from 'react-reveal/Zoom';

class MesEquipements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      height: window.innerHeight-620,
      mesEquipements: equipements,
      title: '',
      mark: '',
      model: '',
      use: '',
      consumption: '',
      cost: '',
      impact: '',
      url: '',
      objDemo: {},
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      isLoading: false,
    }), 2000);
  }

  componentDidUpdate() {
    if ((this.state.objDemo.title === undefined) && (this.props.obj.title !== undefined)) {
      this.setState({
        objDemo: this.props.obj,
        mesEquipements: [...this.state.mesEquipements, this.props.obj],
      }, () => console.log(this.state));
    }
  }

  render() {
    return (
      <div className="MesEquipements" style={{ minHeight: this.state.height }}>
        <div className="containerMesEquipements">
        {
          (this.state.isLoading) ?
          <h1 className="loadingMesEquipements"><i className="fas fa-spinner"></i></h1> :
          <div>
            <Button className="btnAddEquipement" onClick={this.props.clickAddEquipement}>Ajouter un équipement</Button>
            <Zoom>
              <h2>Mes équipements</h2>
              <Row className="containerCardMesEquipements">
                {this.state.mesEquipements.map(item => {
                  return <TemplateCards
                    url={item.url}
                    title={item.title}
                    mark={item.mark}
                    model={item.model}
                    use={item.use}
                    consumption={item.consumption}
                    cost={item.cost}
                    impact={item.impact}
                  />
                })}
              </Row>
            </Zoom>
          </div>
        }
      </div>
      </div>
    )
  }
}

export default MesEquipements;