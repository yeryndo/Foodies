import React, { Component } from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchScreen.css';
import CheckBox from './CheckBoxComponent'
import DisplaySearched from "./DisplaySearched";
import RecipeComponent from "../RecipeComponent"
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert'
 
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
        cheese: false,
        garlic: false,
        potato: false,
        recipes: [],
    };
    
    onChangeIngredient = (ingredient) =>{
        if(ingredient === "chicken"){
            this.setState(initialState => ({
                chicken: !initialState.chicken,
            }));
        }
        if(ingredient === "beef"){
            this.setState(initialState => ({
                beef: !initialState.beef,
            }));
        }
        if(ingredient === "rice"){
            this.setState(initialState => ({
                rice: !initialState.rice,
            }));
        }
        if(ingredient === "eggs"){
            this.setState(initialState => ({
                eggs: !initialState.eggs,
            }));
        }
        if(ingredient === "carrot"){
            this.setState(initialState => ({
                carrot: !initialState.carrot,
            }));
        }
        if(ingredient === "onion"){
            this.setState(initialState => ({
                onion: !initialState.onion,
            }));
        }
        if(ingredient === "potato"){
            this.setState(initialState => ({
                potato: !initialState.potato,
            }));
        }
        if(ingredient === "pepper"){
            this.setState(initialState => ({
                pepper: !initialState.pepper,
            }));
        }
        if(ingredient === "mushroom"){
            this.setState(initialState => ({
                mushroom: !initialState.mushroom,
            }));
        }
        if(ingredient === "tomato"){
            this.setState(initialState => ({
                tomato: !initialState.tomato,
            }));
        }
        if(ingredient === "ketchup"){
            this.setState(initialState => ({
                ketchup: !initialState.ketchup,
            }));
        }
        if(ingredient === "salt"){
            this.setState(initialState => ({
                salt: !initialState.salt,
            }));
        }
        if(ingredient === "cheese"){
            this.setState(initialState => ({
                cheese: !initialState.cheese,
            }));
        }
        if(ingredient === "garlic"){
            this.setState(initialState => ({
                garlic: !initialState.garlic,
            }));
        }
        if(ingredient === "olive oil"){
            this.setState(initialState => ({
                'olive oil': !initialState['olive oil'],
            }));
        }
        if(ingredient === "soy sauce"){
            this.setState(initialState => ({
                'soy sauce': !initialState['soy sauce'],
            }));
        }
    }
    
    resetSearch = () =>{
        this.setState({
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
            cheese: false,
            potato: false,
            garlic: false
        });
    }
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
                console.log('checkarray:');
                console.log(checkArray);
                console.log('res.data:');
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
        if (recipes.length === 0) return(
            <div>
                <p style={{ paddingLeft: 40 }}>Sorry! There are no recipes with those ingredients...</p> 
            </div>
        ) 
 
        return(
            <div>
                <DisplaySearched recipes={recipes} />
            </div>
           
        )
    }
 
    render () {
        return (
            <div>
                <Container fluid="md" >
                    <div id = "submission" className="sectionTitle">
                        <div>
                            <h2>Search For Recipes</h2>
                            <hr 
                                style={{
                                    color: '#E1B067',
                                    backgroundColor: '#E1B067',
                                    height: 2
                                }}
                            />
                        </div>
                        
                        <div >
                            <form className = "formStyling" onSubmit = {this.onSubmit}>
                                <h4><u>Protein</u></h4>
                                <Row className = "rowStyling">
                                    <CheckBox ingredient="chicken" checked ={this.state.chicken}  onChangeIngredient={() => {this.onChangeIngredient("chicken")}}/>
                                    <CheckBox ingredient="beef" checked ={this.state.beef}  onChangeIngredient={() => {this.onChangeIngredient("beef")}}/>
                                    <CheckBox ingredient="rice" checked ={this.state.rice}  onChangeIngredient={() => {this.onChangeIngredient("rice")}}/>
                                    <CheckBox ingredient="eggs" checked ={this.state.eggs}  onChangeIngredient={() => {this.onChangeIngredient("eggs")}}/>
                                </Row>
 
                                <h4><u>Vegetables</u></h4>
                                <Row className = "rowStyling">
                                    <CheckBox ingredient="carrot" checked ={this.state.carrot}  onChangeIngredient={() => {this.onChangeIngredient("carrot")}}/>
                                    <CheckBox ingredient="onion" checked ={this.state.onion}  onChangeIngredient={() => {this.onChangeIngredient("onion")}}/>
                                    <CheckBox ingredient="pepper" checked ={this.state.pepper}  onChangeIngredient={() => {this.onChangeIngredient("pepper")}}/>
                                    <CheckBox ingredient="potato" checked ={this.state.potato}  onChangeIngredient={() => {this.onChangeIngredient("potato")}}/>
                                    <CheckBox ingredient="mushroom" checked ={this.state.mushroom}  onChangeIngredient={() => {this.onChangeIngredient("mushroom")}}/>
                                </Row>
 
                                <h4><u>Condiments</u></h4>
                                <Row className = "rowStyling">
                                    <CheckBox ingredient="ketchup" checked ={this.state.ketchup}  onChangeIngredient={() => {this.onChangeIngredient("ketchup")}}/>
                                    <CheckBox ingredient="salt" checked ={this.state.salt}  onChangeIngredient={() => {this.onChangeIngredient("salt")}}/>
                                    <CheckBox ingredient="olive oil" checked ={this.state['olive oil']}  onChangeIngredient={() => {this.onChangeIngredient("olive oil")}}/>
                                    <CheckBox ingredient="soy sauce" checked ={this.state['soy sauce']}  onChangeIngredient={() => {this.onChangeIngredient("soy sauce")}}/>
                                </Row>

                                <h4><u>Additional</u></h4>
                                <Row className = "rowStyling">
                                    <CheckBox ingredient="tomato" checked ={this.state.tomato}  onChangeIngredient={() => {this.onChangeIngredient("tomato")}}/>
                                    <CheckBox ingredient="cheese" checked ={this.state.cheese}  onChangeIngredient={() => {this.onChangeIngredient("cheese")}}/>
                                    <CheckBox ingredient="garlic" checked ={this.state.garlic}  onChangeIngredient={() => {this.onChangeIngredient("garlic")}}/>
                                </Row>
                                
                                <div className="extraSpace"></div>
                                <div className = "form-group">                            
                                    <button className="btn btn-success searchButton float-right" onClick={()=>setTimeout(() => {this.resetSearch()},100)}>Search for Recipes</button> 
                                </div>

                                
                            </form>
                        </div>                       
                    </div>
        
                    <div>
                        <h2 style={{ paddingTop: 30 }}>Recipes With Selected Ingredients</h2>
                        <hr 
                                style={{
                                    color: '#E1B067',
                                    backgroundColor: '#E1B067',
                                    height: 2
                                }}
                            />
                
                    </div>

                    <div className="insideDiv">
                        {this.displayRecipes(this.state.recipes)}
                    </div>
                </Container>
 
                  
            </div>
    
        )
    }
}
 
export default Search;
