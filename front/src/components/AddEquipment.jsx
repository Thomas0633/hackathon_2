import React from 'react';
import './AddEquipment.scss';
import { Button, Row, Col,Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

class AddEquipment extends React.Component{
    constructor(props){
        super(props)
        this.state = { subcategories:[] }
    }

    componentDidMount(){
        const simul = 'Ecrans';

        switch(simul){
            case 'Ecrans':
                this.setState ({subcategories : ['Télévision','Ordinateur','Smartphone'] }) ;
                break;
            case 'Sons':
                this.setState ({subcategories : ['Enceintes portables','Chaine Hifi'] }) ;
                break;
            case 'Communication':
                this.setState ({subcategories : ['Telephone fixe','Box internet'] }) ;
            break;
            case 'Autres':
                this.setState ({subcategories : ['Camel box','ShoufShouf connecté'] }) ;
            break;
            default:
        }
    }

    render(){
        const { categorie } = this.props;
        const { subcategories } = this.state;
        const simul = 'Ecrans';

        return(  
            <div className="AddEquipment">
            <h2>Mes équipements de {categorie}</h2>
                <Row>
                <Col lg={4} className="subcategories" >
                <ul >
                    {subcategories.map(btncateg=>
                        <li className="subcategorieslist">
                            <Button className="subcategoriesbutton">
                                <span>{btncateg}</span>
                            </Button>
                        </li>
                        )}
                </ul>

                </Col>
                <Col lg={6} className="contentAdd">
                        <h4>{simul}</h4>
                        <Form className="contentadded">
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Quelle est sa marque ?</Label>
                                <Col  lg={7}>
                                    <Input type="text" name="mark" id="exampleEmail" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5} >Quel est son modèle ?</Label>
                                <Col  lg={7}>
                                    <Input type="text" name="model" id="exampleEmail" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Votre temps d'utilisation en heures?</Label>
                                  <Col lg={7} className="d-flex justify-content-around">
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={3}>
                                            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="/jour" />
                                        </Col>
                                        <Col lg={4}>
                                            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="/semaine" />
                                        </Col>
                                        <Col lg={3}>
                                            <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="/mois" />
                                        </Col>
                                    </Row>
                                 </Col>
                                <Col  lg={{offset:'5',size:'7'}}>
                                    <Input type="number" name="use" id="exampleEmail" placeholder="" />
                                </Col>
                            </FormGroup>
                        </Form>
                        <Button size='lg' block className="buttonaddequipement">Confirmer l'ajout</Button>

                </Col>
                </Row>
            </div>
        )
    }
}

export default AddEquipment;