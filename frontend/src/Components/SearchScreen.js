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
        egg: false,
        carrot: false,
        onion: false,
        ketchup: false,
        salt: false
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
    onChangeEgg = () => {
        this.setState(initialState => ({
            egg: !initialState.egg,
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

        //converting checked values into String
        let checkArray = [];
        for (var key in this.state){
            if(this.state[key] === true){
                checkArray.push(key);
            }
        }

        let checkData = {
            ingredients: checkArray.toString()
        };

        axios.post('http://localhost:4000/api/checkbox-save', checkData)
            .then((res) => {
                console.log(res.data)
                
            }).catch((error) => {
                console.log(error)
            });
    }

    // sendData = (data) =>{
    //     form.reset();
    //     document.getElementById("submission").reset();
    // }

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
                                                checked = {this.state.egg}
                                                onChange = {this.onChangeEgg}
                                                className = "form-check-input"
                                            />
                                            Egg
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
                                {/* onClick={window.location.href='/display'} Add to button but also need to clear event handling   */}
                            </div>
                        </form>
                    </div>                       
                </div>
            </Container>
            
        )
    }
}

export default Search;