import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchScreen.css';

class Search extends Component {
    //Initial checkbox state
    state = {
        chicken: false,
        beef: false,
        rice: false,
        eggs: false,
        potato: false,
        carrot: false,
        onion: false,
        pepper: false,
        mushroom: false,
        tomato: false,
        ketchup: false,
        salt: false,
        'olive oil': false,
        'soy sauce': false,
        recipes: []
    };

    //React checkboxes onChange methods
    onChangeChicken = () => {
        this.setState(initialState => ({
            chicken: !initialState.chicken,
        }));
    }
    onChangeBeef = () => {
        this.setState(initialState => ({
            beef: !initialState.beef,
        }));
    }
    onChangeRice = () => {
        this.setState(initialState => ({
            rice: !initialState.rice,
        }));
    }
    onChangeEggs = () => {
        this.setState(initialState => ({
            eggs: !initialState.eggs,
        }));
    }
    onChangeCarrot = () => {
        this.setState(initialState => ({
            carrot: !initialState.carrot,
        }));
    }
    onChangeOnion = () => {
        this.setState(initialState => ({
            onion: !initialState.onion,
        }));
    }
    onChangePepper = () => {
        this.setState(initialState => ({
            pepper: !initialState.pepper,
        }));
    }
    onChangeMushroom = () => {
        this.setState(initialState => ({
            mushroom: !initialState.mushroom,
        }));
    }
    onChangeTomato = () => {
        this.setState(initialState => ({
            tomato: !initialState.tomato,
        }));
    }
    onChangeKetchup = () => {
        this.setState(initialState => ({
            ketchup: !initialState.ketchup,
        }));
    }
    onChangeSalt = () => {
        this.setState(initialState => ({
            salt: !initialState.salt,
        }));
    }
    onChangeOilveOil = () => {
        this.setState(initialState => ({
            'olive oil': !initialState['olive oil'],
        }));
    }
    onChangeSoySauce = () => {
        this.setState(initialState => ({
            'soy sauce': !initialState['soy sauce'],
        }));
    }

    //Submit
    onSubmit = (e) => {
        e.preventDefault();
        console.log("Passed");

        let checkArray = [];
        for (var key in this.state){
            if(this.state[key] === true){
                checkArray.push(key);
            }
        }
        console.log(checkArray);
        axios.post('http://localhost:8000/getRecipes', checkArray)
            .then((res) => {
                console.log(res.data)
                const data = res.data;
                this.setState({recipes: data});
                console.log('Data has been received!');
                
            }).catch((error) => {
                console.log(error)
                console.log("Error receiving data");
            });
    }

    displayRecipes = (recipes) => {
        if (recipes.length === 0) return "No recipes with that criteria"; 

        return recipes.map((recipe, index) => (
            <div key ={index}>
                <h3>Recipe Name:</h3>
                <p>{recipe.name}</p>
                <p>{recipe.detail}</p>
            </div>
        ));
    }

    render () {
        return (
            <Container>
                <div id = "submission">
                    <h2 className = "title">Search For Recipes</h2>
                        <div className = "insideDiv">
                            <form onSubmit = {this.onSubmit}>
                            <h4><u>Protein</u></h4>
                            <Row className = "rowStyling">
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.chicken}
                                                onChange = {this.onChangeChicken}
                                                className = "form-check-input"
                                            />
                                            Chicken
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.beef}
                                                onChange = {this.onChangeBeef}
                                                className = "form-check-input"
                                            />
                                            Beef
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.rice}
                                                onChange = {this.onChangeRice}
                                                className = "form-check-input"
                                            />
                                            Rice
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.eggs}
                                                onChange = {this.onChangeEggs}
                                                className = "form-check-input"
                                            />
                                            Eggs
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            <h4><u>Vegetables</u></h4>
                            <Row className = "rowStyling">
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.carrot}
                                                onChange = {this.onChangeCarrot}
                                                className = "form-check-input"
                                            />
                                            Carrot
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.onion}
                                                onChange = {this.onChangeOnion}
                                                className = "form-check-input"
                                            />
                                            Onion
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.pepper}
                                                onChange = {this.onChangePepper}
                                                className = "form-check-input"
                                            />
                                            Pepper
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.mushroom}
                                                onChange = {this.onChangeMushroom}
                                                className = "form-check-input"
                                            />
                                            Mushroom
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.tomato}
                                                onChange = {this.onChangeTomato}
                                                className = "form-check-input"
                                            />
                                            Tomato
                                        </label>
                                    </div>
                                </Col>
                            </Row>                    
                            <h4><u>Condiments</u></h4>
                            <Row className = "rowStyling">
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.ketchup}
                                                onChange = {this.onChangeKetchup}
                                                className = "form-check-input"
                                            />
                                            Ketchup
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state.salt}
                                                onChange = {this.onChangeSalt}
                                                className = "form-check-input"
                                            />
                                            Salt
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state['olive oil']}
                                                onChange = {this.onChangeOilveOil}
                                                className = "form-check-input"
                                            />
                                            Olive oil
                                        </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div className = "form-check">
                                        <label className = "form-check-label">
                                            <input type = "checkbox"
                                                checked = {this.state['soy sauce']}
                                                onChange = {this.onChangeSoySauce}
                                                className = "form-check-input"
                                            />
                                            Soy sauce
                                        </label>
                                    </div>
                                </Col>
                            </Row>

                            <div className = "form-group">                            
                                <button className="btn btn-success searchButton float-right">Search for Recipes</button> 
                            </div>
                        </form>
                    </div>                       
                </div>

                <div>
                    <h2>Recipes With Selected Ingredients</h2>
                    <div>
                        {this.displayRecipes(this.state.recipes)}
                    </div>                
                </div>
            </Container>
            
            
        )
    }
}

export default Search;