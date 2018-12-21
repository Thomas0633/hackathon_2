import React from 'react';
import './AddUsages.scss';
import { Button, Row, Col,Form, FormGroup, Label, Input, CustomInput,ModalHeader,Modal,ModalFooter,ModalBody } from 'reactstrap';
import Modale from './Modale';

class AddUsages extends React.Component{
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
        const simul = 'Usages';

        switch(simul){
            case 'Usages':
                this.setState ({subcategories : ['Mails','Navigateurs','Matériels multimédia'] }) ;
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
            <div className="AddUsages">
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
                        <h3 className="pulse">Sélectionnez un type d'usage internet de la catégorie {simulcategorie}</h3>
                    </div>:
                <Col lg={6} className="contentAdd">
                        <h4>Dites nous en plus sur vos {category}...</h4>
                        <Form className="contentadded">
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Combien de boîtes mails possédez-vous ?</Label>
                                <Col lg={7} className="d-flex justify-content-around">
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio" 
                                            name="1" 
                                            label="1"
                                            value="1" 
                                            checked={this.state.selectedOption === '1'}
                                            onChange={this.handleOptionChange} />
                                
                                        </Col>
                                        <Col lg={4}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio2" 
                                            name="2" 
                                            label="2"
                                            value="2" 
                                            checked={this.state.selectedOption === '2'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio3" 
                                            name="3" 
                                            label="3 et plus"
                                            value="3" 
                                            checked={this.state.selectedOption === '3'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                    </Row>
                                 </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5} >Combien de mails recevez-vous par jour ?</Label>
                                <Col lg={7} className="d-flex justify-content-around">
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio" 
                                            name="1-10" 
                                            label="1-10"
                                            value="1-10" 
                                            checked={this.state.selectedOption === '1-10'}
                                            onChange={this.handleOptionChange} />
                                
                                        </Col>
                                        <Col lg={4}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio2" 
                                            name="10-30" 
                                            label="10-30"
                                            value="10-30" 
                                            checked={this.state.selectedOption === '10-30'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio3" 
                                            name="30 et plus" 
                                            label="30 et plus"
                                            value="30 et plus" 
                                            checked={this.state.selectedOption === '30 et plus'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                    </Row>
                                 </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" lg={5}>Combien de mails avez-vous dans votre boîte de réception?</Label>
                                <Col lg={7} className="d-flex justify-content-around">
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio" 
                                            name="0-100" 
                                            label="0-100"
                                            value="0-100" 
                                            checked={this.state.selectedOption === '0-100'}
                                            onChange={this.handleOptionChange} />
                                
                                        </Col>
                                        <Col lg={4}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio2" 
                                            name="100-500" 
                                            label="100-500"
                                            value="100-500" 
                                            checked={this.state.selectedOption === '100-500'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio3" 
                                            name="500 et plus" 
                                            label="500 et plus"
                                            value="500 et plus" 
                                            checked={this.state.selectedOption === '500 et plus'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                    </Row>
                                 </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="consumption" lg={5} >Combien de spams supprimez-vous par jour ?</Label>
                                <Col lg={7} className="d-flex justify-content-around">
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio" 
                                            name="0-10" 
                                            label="0-10"
                                            value="0-10" 
                                            checked={this.state.selectedOption === '0-10'}
                                            onChange={this.handleOptionChange} />
                                
                                        </Col>
                                        <Col lg={4}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio2" 
                                            name="10-20" 
                                            label="10-20"
                                            value="10-20" 
                                            checked={this.state.selectedOption === '10-20'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio3" 
                                            name="20 et plus" 
                                            label="20 et plus"
                                            value="20 et plus" 
                                            checked={this.state.selectedOption === '20 et plus'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                    </Row>
                                 </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="cost" lg={5} >Combien de mails envoyez-vous par jour ?</Label>
                                <Col lg={7} className="d-flex justify-content-around">
                                    <Row className="d-flex justify-content-center">
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio" 
                                            name="1-5" 
                                            label="1-5"
                                            value="1-5" 
                                            checked={this.state.selectedOption === '1-5'}
                                            onChange={this.handleOptionChange} />
                                
                                        </Col>
                                        <Col lg={4}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio2" 
                                            name="5-10" 
                                            label="5-10"
                                            value="5-10" 
                                            checked={this.state.selectedOption === '5-10'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                        <Col lg={3}>
                                            <CustomInput type="radio" 
                                            id="exampleCustomRadio3" 
                                            name="10 et plus" 
                                            label="10 et plus"
                                            value="10 et plus" 
                                            checked={this.state.selectedOption === '10 et plus'}
                                            onChange={this.handleOptionChange} />
                                             
                                        </Col>
                                    </Row>
                                 </Col>
                            </FormGroup>
                        </Form>
                        <Button size='lg' block className="buttonaddusagesinternet" onClick={clickConfirmAdd}>
                            Confirmer l'ajout
                        </Button>

                    </Col> }
                </Row>
            </div>
        )
    }
}

export default AddUsages;