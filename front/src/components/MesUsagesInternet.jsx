import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './MesUsagesInternet.scss';
import usagesinternet from '../usagesinternet.json';
import TemplateCardsUsages from './TemplateCardsUsages';

class MesUsagesInternet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mesUsagesInternet: usagesinternet,
      title : '',
      nbboitesmail : '',
      nbmailsrecusjournalier : '',
      nbmailboitereception : '',
      nbspamssuppriesjournalier : '',
      nbmailsenvoyesjournalier:'',
      nbongletsouverts : '',
      nbrecherches : '',
      nbvideos : '',
      impact:'', 
      objDemoUsages: {},
    }
  }

  componentDidUpdate() {
    if (this.props.obj.length !== undefined) {
      console.log(this.props.obj.length)
      this.setState({
        mesUsagesInternet: [...this.state.mesUsagesInternet, this.props.obj],
      });
    }
  }

  render() {
    return (
      <div className="MesUsagesinternet">
        <div className="containerMesUsagesinternet">
          <Button className="btnAddUsagesinternet" onClick={this.props.clickAddUsages}>Ajouter un usage</Button>
          <h2>Mes usages d'internet</h2>
          <div className="containerCardMesUsagesinternet">
            {this.state.mesUsagesInternet.map(item => {
              return <TemplateCardsUsages
                title={item.title}
                nbongletsouverts={item.nbongletsouverts}
                nbrecherches={item.nbrecherches}
                nbvideos={item.nbvideos}
                impact={item.impact}
              />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default MesUsagesInternet;