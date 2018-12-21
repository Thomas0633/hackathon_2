import React from 'react';
import './Contactform.scss';

import { Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

export default class Contactform extends React.Component {
  render() {
    return (
      
        <Container className= "formMargin">
        <h1 className="titleforms">Contactez nous</h1>


      <Form>
          <Row>
          <Col md= "6">    
        <FormGroup>

        <Label for="lastname">Nom</Label>
          <Input type="text" name="lastnameForm" id="lastname" placeholder="Votre Nom" />
          </FormGroup>
          </Col>
          <Col md= "6">
          <FormGroup>
          <Label for="firstname">Prénom</Label>
          <Input type="text" name="firstnameForm" id="firstname" placeholder="Votre prénom" />     
        </FormGroup>
        </Col>
        </Row>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="emailForm" id="email" placeholder=" Wilder@digipact.com" />
        </FormGroup>   

        <FormGroup>
        <Label for="subject">Objet</Label>
          <Input type="text" name="subjectForm" id="subject" placeholder="Objet de votre message" />  
        </FormGroup>   
        
        <FormGroup>
          <Label for="text">Votre message</Label>
          <Input type="textarea" name="textForm" id="text" placeholder= "Votre message..." />
        </FormGroup>
        <a className="fancy-button bg-gradient1"><span>Envoyez votre message !</span></a>
      </Form>
      </Container>
    );
  }
}
