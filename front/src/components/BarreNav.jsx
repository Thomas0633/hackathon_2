import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from "reactstrap";
import "./BarreNav.scss";

class BarreNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <a href="http://localhost:3000/">
        <img
          src="http://image.noelshack.com/fichiers/2018/51/4/1545317309-digipact-sans-fond.png"
          className="Logo"
        /></a>
        <Navbar light expand="md" className="barrenav ">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Row className="LargeurRowbarreNav">
              <Col md="6" className="margeintérieur">
                <Nav navbar className="Colbarrenav">
                  <NavItem>
                    <NavLink className="taillepolicebarrenav" href="/components/">Concept</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="taillepolicebarrenav" nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Particulier</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Entreprise</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Col>
              <Col md="6" className="margeintérieur2">
                <Nav className="Colbarrenav" navbar>
                  <NavItem>
                    <NavLink className="taillepolicebarrenav" href="/components/">Nos Astuces</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="taillepolicebarrenav" href="https://github.com/reactstrap/reactstrap">
                      Contact
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default BarreNav;
