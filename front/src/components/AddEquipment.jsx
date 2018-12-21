import React from 'react';
import './AddEquipment.scss';
import { Button, Row, Col,Form, FormGroup, Label, Input, CustomInput,ModalHeader,Modal,ModalFooter,ModalBody } from 'reactstrap';
import Modale from './Modale';

class AddEquipment extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            subcategories:[],
            category:'',
            newee: {
                mark: '',
                model: '',
                hours: '',
                consumption: '',
                cost: '',
            },
            modal:false,
         }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        const simul = 'Ecrans';

        switch(simul){
            case 'Ecrans':
                this.setState ({subcategories : ['Téléviseur','Ordinateur','Smartphone'] }) ;
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

    handleOptionChange=(e)=>{
        this.setState({
          selectedOption: e.target.value
        });
      }

    onChange(e) {
        const { newee } = this.state;
        newee[e.target.name] = e.target.value;
        this.setState(newee);    }

    handleClick(category){
        this.setState({category:category})
    }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

    render(){
        const { categorie, clickConfirmAdd } = this.props;
        const { subcategories, category, newee, mark, model } = this.state;
        const simulcategorie = 'Ecrans';

        return(  
            <div className="AddEquipment">
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Mon {category} ajouté</ModalHeader>
                    <ModalBody>
                        <div className="PositiveResults">
                            Bravo, le <span className="gras">{mark}</span> modèle <span className="gras">{model}</span> se classe dans les meilleurs équipements de sa catégorie pour ses performances énergétiques.
                        </div>
                        <div className="NeutralResults">
                            Votre <span className="gras">{mark}</span> <span className="gras">{model}</span> consomme +200€/an par rapport à la moyenne de sa catégorie
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Suggérez-moi quelque-chose !</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>D'accord</Button>
                    </ModalFooter>
                </Modal>
                <Row>
                <Col lg={4} className="subcategories" >
                <ul >
                    {subcategories.map(btncateg=>
                        <li className="subcategorieslist">
                            <Button className="subcategoriesbutton" onClick={()=>this.handleClick(btncateg)}>
                                <span>{btncateg}</span>
                            </Button>
                        </li>
                        )}
                </ul>

                </Col>
                {category===''?
                <div className="contentAddempty">
                        <h3 className="pulse">Sélectionnez un type d'équipement de la catégorie {simulcategorie}</h3>
                    </div>:
                <Col lg={6} className="contentAdd">
                        <h4>Dites nous en plus sur votre {category}...</h4>
                        <Form className="contentadded">
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Quelle est sa marque ?</Label>
                                <Col  lg={7}>
                                    <Input type="text" 
                                    name="mark" 
                                    id="exampleEmail" 
                                    value={newee.mark}
                                    onChange={this.onChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5} >Quel est son modèle ?</Label>
                                <Col  lg={7}>
                                    <Input type="text" 
                                    name="model" 
                                    id="exampleEmail" 
                                    value={newee.model}
                                    onChange={this.onChange} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Votre temps d'utilisation en heures?</Label>
                                  <Col lg={7} className="d-flex justify-content-around">
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio" 
                                            name="jour" 
                                            label="/jour"
                                            value="jour" 
                                            checked={this.state.selectedOption === 'jour'}
                                            onChange={this.handleOptionChange} />
                                
                                        </Col>
                                        <Col lg={4}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio2" 
                                            name="semaine" 
                                            label="/semaine"
                                            value="semaine" 
                                            checked={this.state.selectedOption === 'semaine'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio3" 
                                            name="mois" 
                                            label="/mois"
                                            value="mois" 
                                            checked={this.state.selectedOption === 'mois'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                    </Row>
                                 </Col>
                                <Col  lg={{offset:'5',size:'7'}}>
                                    <Input type="number" 
                                    name="hours" 
                                    id="exampleEmail"
                                    value={newee.hours}
                                    onChange={this.onChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="consumption" lg={5} >Quelle est sa consommation énergétique ?</Label>
                                <Col  lg={7}>
                                    <Input type="text" 
                                    name="consumption" 
                                    id="consumption" 
                                    value={newee.consumption}
                                    onChange={this.onChange} 
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="cost" lg={5} >Quelle est son coût par année ?</Label>
                                <Col  lg={7}>
                                    <Input type="text" 
                                    name="cost" 
                                    id="cost" 
                                    value={newee.cost}
                                    onChange={this.onChange} 
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                        <Button size='lg' block className="buttonaddequipement" onClick={clickConfirmAdd}>
                            Confirmer l'ajout
                        </Button>

                    </Col> }
                </Row>
            </div>
        )
    }
}

export default AddEquipment;