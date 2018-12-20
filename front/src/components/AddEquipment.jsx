import React from 'react';
import './AddEquipment.scss';
import { Button, Row, Col,Form, FormGroup, Label, Input } from 'reactstrap';

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
                                <Label for="exampleEmail" lg={5}>Marque:</Label>
                                <Col  lg={7}>
                                    <Input type="text" name="mark" id="exampleEmail" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5} >Modèle:</Label>
                                <Col  lg={7}>
                                    <Input type="text" name="model" id="exampleEmail" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Fréquence d'utilisation:</Label>
                                <Col  lg={7}>
                                    <Input type="text" name="use" id="exampleEmail" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Consommation energétique (kw):</Label>
                                <Col lg={7}>
                                    <Input type="number" name="energyconso" id="exampleEmail" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Coût par année (€):</Label>
                                    <Col lg={7}>
                                        <Input type="number" name="cost" id="exampleEmail" placeholder="" />
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