import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    //Initial checkbox state
    state = {
        chicken: false,
        beef: false,
        rice: false,
        egg: false,
        carrot: false,
        onion: false,
        ketchup: false
    };

    componentDidMount = () => {
        this.getSelected();
    }

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

    render () {
        return (
            <div>
                <h2>Search For Recipes</h2>
                <form onSubmit = {this.onSubmit}>
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

                    <div className = "form-group">
                        <button className = "btn btn-success">Save</button>                 
                    </div>
                </form>             
            </div>
        )
    }
}

export default Search;