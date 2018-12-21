import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './MesEquipements.scss';
import equipements from '../equipements.json';
import TemplateCards from './TemplateCards';

class MesEquipements extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      <div className="MesEquipements">
        <div className="containerMesEquipements">
          <Button className="btnAddEquipement" onClick={this.props.clickAddEquipement}>Ajouter un équipement</Button>
          <h2>Mes équipements</h2>
          <div className="containerCardMesEquipements">
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
          </div>
        </div>
      </div>
    )
  }
}

export default MesEquipements;