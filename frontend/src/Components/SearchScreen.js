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
        carrot: false,
        onion: false,
        ketchup: false,
        salt: false,
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
                <p>{recipe.calories}</p>
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
                            <Row>
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
                            <Row>
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
                            </Row>                    
                            <h4><u>Sauces</u></h4>
                            <Row>
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
                            </Row>

                            <div className = "form-group">                            
                                <button className="btn btn-success">Search</button> 
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