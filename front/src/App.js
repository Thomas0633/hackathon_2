import React, { Component } from "react";
import "./App.css";
import BarreNav from "./components/BarreNav";
import { Switch, Route } from "react-router-dom";
import HomePageof from './components/HomePageof';
import PageParticulier from './components/PageParticulier';
import Contactform from './components/Contactform';
import TemplateCards from './components/TemplateCards';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageof} />
          <Route path="/page-particulier" component={PageParticulier} />
          <Route path="/contact" component={Contactform} />
        </Switch>
        <BarreNav />
        <TemplateCards />
        <Footer />
      </div>
    );
  }
}

export default App;
