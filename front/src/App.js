import React, { Component } from "react";
import "./App.css";
import BarreNav from "./components/BarreNav";
import { Switch, Route } from "react-router-dom";
// import HomePageof from './components/HomePageof';
// import PageParticulier from './components/PageParticulier';
// import Contactform from './components/Contactform';
import AddEquipment from './components/AddEquipment';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BarreNav />
        <Switch>
          <Route path="/add-equipment" component={AddEquipment} />
        </Switch>
      </div>
    );
  }
}

export default App;
