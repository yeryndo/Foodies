import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchScreen.css';
import CheckBox from './CheckBoxComponent'
import RecipeComponent from "../../Components/RecipeComponent";
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
        recipes: [],
    };
 
    onChangeIngredient = (ingredient) =>{
        if(ingredient === "chicken"){
            this.setState(initialState => ({
                chicken: !initialState.chicken,
            }));
        }
        else if(ingredient === "beef"){
            this.setState(initialState => ({
                beef: !initialState.beef,
            }));
        }
        else if(ingredient === "rice"){
            this.setState(initialState => ({
                rice: !initialState.rice,
            }));
        }
        else if(ingredient === "eggs"){
            this.setState(initialState => ({
                eggs: !initialState.eggs,
            }));
        }
        else if(ingredient === "carrot"){
            this.setState(initialState => ({
                carrot: !initialState.carrot,
            }));
        }
        else if(ingredient === "onion"){
            this.setState(initialState => ({
                onion: !initialState.onion,
            }));
        }
        else if(ingredient === "pepper"){
            this.setState(initialState => ({
                pepper: !initialState.pepper,
            }));
        }
        else if(ingredient === "mushroom"){
            this.setState(initialState => ({
                mushroom: !initialState.mushroom,
            }));
        }
        else if(ingredient === "tomato"){
            this.setState(initialState => ({
                tomato: !initialState.tomato,
            }));
        }
        else if(ingredient === "ketchup"){
            this.setState(initialState => ({
                ketchup: !initialState.ketchup,
            }));
        }
        else if(ingredient === "salt"){
            this.setState(initialState => ({
                salt: !initialState.salt,
            }));
        }
        else if(ingredient === "olive oil"){
            this.setState(initialState => ({
                'olive oil': !initialState['olive oil'],
            }));
        }
        else if(ingredient === "soy sauce"){
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
        }
        );
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
 
        return recipes.map((recipe, index) =>(
            <div key={index}>
                <RecipeComponent meal={recipe.meal} category={recipe.category}/>
            </div>
        ));
    }
 
    render () {
        return (
            <div>
                <Container fluid="md" >
                    <div id = "submission" className="background">
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
                            <form onSubmit = {this.onSubmit}>
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
                                    <CheckBox ingredient="mushroom" checked ={this.state.mushroom}  onChangeIngredient={() => {this.onChangeIngredient("mushroom")}}/>
                                    <CheckBox ingredient="tomato" checked ={this.state.tomato}  onChangeIngredient={() => {this.onChangeIngredient("tomato")}}/>
                                </Row>
 
                                <h4><u>Condiments</u></h4>
                                <Row className = "rowStyling">
                                    <CheckBox ingredient="ketchup" checked ={this.state.ketchup}  onChangeIngredient={() => {this.onChangeIngredient("ketchup")}}/>
                                    <CheckBox ingredient="salt" checked ={this.state.salt}  onChangeIngredient={() => {this.onChangeIngredient("salt")}}/>
                                    <CheckBox ingredient="olive oil" checked ={this.state['olive oil']}  onChangeIngredient={() => {this.onChangeIngredient("olive oil")}}/>
                                    <CheckBox ingredient="soy sauce" checked ={this.state['soy sauce']}  onChangeIngredient={() => {this.onChangeIngredient("soy sauce")}}/>
                                </Row>
 
                                <div className = "form-group">                            
                                    <button className="btn btn-success searchButton float-right" onClick={()=>setTimeout(() => {this.resetSearch()},100)}>Search for Recipes</button> 
                                </div>
                            </form>
                        </div>                       
                    </div>
        
                    <div>
                        <h2>Recipes With Selected Ingredients</h2>
                        <hr 
                                style={{
                                    color: '#E1B067',
                                    backgroundColor: '#E1B067',
                                    height: 2
                                }}
                            />
                
                    </div>
                </Container>
 
                <div className="insideDiv">
                    {this.displayRecipes(this.state.recipes)}
                </div>   
            </div>
    
        )
    }
}
 
export default Search;
