import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './PageParticulier.scss';
import MesEquipements from './MesEquipements';
import MesUsagesInternet from './MesUsagesInternet';
import AddEquipment from './AddEquipment';
import AddUsages from './AddUsages';
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
      objDemoUsages: {}
    }
    this.handleClickNavPage = this.handleClickNavPage.bind(this);
    this.handleClickAddEquipement = this.handleClickAddEquipement.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleClickConfirmAdd = this.handleClickConfirmAdd.bind(this);
    this.handleClickAddUsages = this.handleClickAddUsages.bind(this);
    this.handleClickConfirmAddUsages = this.handleClickConfirmAddUsages.bind(this);
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

  handleClickAddUsages() {
    this.setState({
      addUsages: true,
    });
  }

  handleClickClose() {
    this.setState({
      addEquipement: false,
      addUsages: false,
    });
  }

  handleClickConfirmAdd() {
    const objDemo = {
      title: "SMARTPHONE",
      mark: "SAMSUNG",
      model: "GALAXY S7",
      use: "25",
      consumption: "25",
      cost: "3.75",
      impact: "5",
    };
    this.setState({
      addEquipement: false,
      objDemo,
    }, () => console.log(objDemo.title));
  }

  handleClickConfirmAddUsages() {
    const objDemoUsages = {
      title : "MAILS",
      nbboitesmail : "1",
      nbmailsrecusjournalier : "1-10",
      nbmailboitereception : "100-500",
      nbspamssuppriesjournalier : "10-20",
      nbmailsenvoyesjournalier:"5-10"
    };
    this.setState({
      addUsages: false,
      objDemoUsages,
    }, () => console.log(this.state));
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
        {
          (this.state.addUsages) ?
          <div className="containerAddEquipement" style={{ minHeight: this.state.heightPage }}>
            <Zoom bottom>
              <Button className="closeFormAddEquipement" onClick={this.handleClickClose}><i className="fas fa-times"></i></Button>
              <AddUsages />
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
          {(this.state.ongletActif === "mesEquipements") ?
           <MesEquipements clickAddEquipement={this.handleClickAddEquipement} clickConfirmAdd={this.handleClickConfirmAdd} obj={this.state.objDemo} /> :
            <MesUsagesInternet clickAddUsages={this.handleClickAddUsages} clickConfirmAdd={this.handleClickConfirmAddUsages} obj={this.state.objDemoUsages}/>}
        </div>
      </div>
    )
  }
}

export default PageParticulier;