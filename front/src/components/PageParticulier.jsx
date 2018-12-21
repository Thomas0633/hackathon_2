import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './PageParticulier.scss';
import MesEquipements from './MesEquipements';
import MesUsagesInternet from './MesUsagesInternet';
import AddEquipment from './AddEquipment';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';


class PageParticulier extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heightPage: 0,
      ongletActif: 'mesEquipements',
      activeMesEquipements: 'active',
      activeMesUsagesInternet: '',
      addEquipement: false,
      objDemo: {},
    }
    this.handleClickNavPage = this.handleClickNavPage.bind(this);
    this.handleClickAddEquipement = this.handleClickAddEquipement.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickConfirmAdd = this.handleClickConfirmAdd.bind(this);
  }

  componentDidMount() {
    const height = document.body.scrollHeight - 110;
    this.setState({
      heightPage: height,
    });
  }

  handleClickNavPage(e) {
    // eslint-disable-next-line default-case
    switch(e.target.name) {
      case 'mesEquipements':
        this.setState({
          ongletActif: e.target.name,
          activeMesEquipements: 'active',
          activeMesUsagesInternet: '',
        });
        break;
      case 'mesUsagesInternet':
        this.setState({
          ongletActif: e.target.name,
          activeMesEquipements: '',
          activeMesUsagesInternet: 'active',
        });
        break;
    };
  }

  handleClickAddEquipement() {
    this.setState({
      addEquipement: true,
    });
  }

  handleClickClose() {
    this.setState({
      addEquipement: false,
    });
  }

  handleClickConfirmAdd() {
    const objDemo = {
      title: "SON",
      mark: "Devialet",
      model: "Phantom",
      use: "50",
      consumption: "18",
      cost: "7",
      impact: "2",
    };
    this.setState({
      addEquipement: false,
      objDemo,
    }, () => console.log(objDemo.title));
  }

  render() {
    return (
      <div className="PageParticulier">
        {
          (this.state.addEquipement) ?
          <div className="containerAddEquipement" style={{ minHeight: this.state.heightPage }}>
            <Zoom bottom>
              <Button className="closeFormAddEquipement" onClick={this.handleClickClose}><i className="fas fa-times"></i></Button>
              <AddEquipment clickConfirmAdd={this.handleClickConfirmAdd} />
            </Zoom>
          </div>
           : null
        }
        <Flip left>
          <h1 className="titlePagePerso"><i className="fas fa-home"></i> Particulier</h1>
        </Flip>
        <nav className="navPageParticulier">
            <Button className={`btnNavPageParticulier ${this.state.activeMesEquipements} mr-5`} name="mesEquipements" onClick={this.handleClickNavPage}>
              Mes équipements
            </Button>
            <Button className={`btnNavPageParticulier ${this.state.activeMesUsagesInternet}`} name="mesUsagesInternet" onClick={this.handleClickNavPage}>
              Mes usages Internet
            </Button>
        </nav>
        <div>
          {(this.state.ongletActif === "mesEquipements") ? <MesEquipements clickAddEquipement={this.handleClickAddEquipement} obj={this.state.objDemo} /> : <MesUsagesInternet />}
        </div>
      </div>
    )
  }
}

export default PageParticulier;