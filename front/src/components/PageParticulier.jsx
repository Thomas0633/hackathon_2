import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './PageParticulier.scss';
import MesEquipements from './MesEquipements';
import MesUsagesInternet from './MesUsagesInternet';


class PageParticulier extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ongletActif: 'mesEquipements',
      activeMesEquipements: 'active',
      activeMesUsagesInternet: '',
    }
    this.handleClickNavPage = this.handleClickNavPage.bind(this);
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

  render() {
    return (
      <div className="PageParticulier">
        <h1 className="titlePagePerso">Particulier</h1>
        <nav className="navPageParticulier">
            <Button className={`btnNavPageParticulier ${this.state.activeMesEquipements}`} name="mesEquipements" onClick={this.handleClickNavPage}>
              Mes équipements
            </Button>
            <Button className={`btnNavPageParticulier ${this.state.activeMesUsagesInternet}`} name="mesUsagesInternet" onClick={this.handleClickNavPage}>
              Mes usages Internet
            </Button>
        </nav>
        <div>
          {(this.state.ongletActif === "mesEquipements") ? <MesEquipements /> : <MesUsagesInternet />}
        </div>
      </div>
    )
  }
}

export default PageParticulier;