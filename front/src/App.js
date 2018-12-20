import React, { Component } from "react";
import "./App.css";
import BarreNav from "./components/BarreNav";
import { Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import PageParticulier from './components/PageParticulier';
import Contactform from './components/Contactform';
import AddEquipment from './components/AddEquipment';
import MesAstuces from './components/MesAstuces';
import Footer from './components/Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <BarreNav />
        </div>
        <Switch>
          <Route path="/add-equipment" component={AddEquipment} />
          <Route exact path="/" component={HomePage} />
          <Route path="/page-particulier" component={PageParticulier} />
          <Route path="/contact" component={Contactform} />
          <Route path="/MesAstuces" component={MesAstuces} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
