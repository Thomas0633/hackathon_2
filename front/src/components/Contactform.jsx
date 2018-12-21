import React from 'react';
import './Contactform.scss';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      
        <Container className= "formMargin">
        <h1 className="titleforms">Contactez nous</h1>


      <Form>
          <Row>
          <Col md= "6">    
        <FormGroup>

        <Label for="lastname" className="policebutton">Nom</Label>
          <Input type="text" name="lastnameForm" id="lastname" placeholder="Votre Nom" className="policebutton" />
          </FormGroup>
          </Col>
          <Col md= "6">
          <FormGroup>
          <Label for="firstname" className="policebutton">Prénom</Label>
          <Input type="text" name="firstnameForm" id="firstname" placeholder="Votre prénom" className="policebutton" />     
        </FormGroup>
        </Col>
        </Row>
        <FormGroup>
          <Label for="email" className="policebutton">Email</Label>
          <Input type="email" name="emailForm" id="email" placeholder=" Wilder@digipact.com" className="policebutton" />
        </FormGroup>   

        <FormGroup>
        <Label for="subject" className="policebutton">Objet</Label>
          <Input type="text" name="subjectForm" id="subject" placeholder="Objet de votre message" className="policebutton" />  
        </FormGroup>   
        
        <FormGroup>
          <Label for="text" className="policebutton">Votre message</Label>
          <Input type="textarea" name="textForm" id="text" placeholder= "Votre message..." className="policebutton"/>
        </FormGroup>
        <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody className="policebutton">
            Votre message a été envoyé avec succes.
          </ModalBody>
          <ModalFooter>
          <Link to='/'><Button color="secondary" onClick={this.toggle} className="policebutton">Fermer</Button></Link>
          </ModalFooter>
        </Modal>
      </div>
        <a className="fancy-button bg-gradient1" onClick={this.toggle}>{this.props.buttonLabel}<span className="policebutton">Envoyez votre message !</span></a>
      </Form>
      </Container>
    );
  }
}
