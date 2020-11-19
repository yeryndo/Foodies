import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
 
function CheckBox(props){
 
    const [chicken, useChicken] = React.useState(false);
    const [beef, useBeef] = React.useState(false);
    const [rice, useRice] = React.useState(false);
    const [eggs, useEggs] = React.useState(false);
    const [carrot, useCarrot] = React.useState(false);
    const [onion, useOnion] = React.useState(false);
    const [ketchup, useKetchup] = React.useState(false);
    const [salt, useSalt] = React.useState(false);
 
    return(
        <Col>
            <div className = "form-check">
                <label className = "form-check-label">
                    <input type = "checkbox"
                        checked = {props.checked}
                        onChange = {props.onChangeIngredient}
                        className = "form-check-input"
                    />
                    {props.ingredient}
                </label>
            </div>
        </Col>
    )
}
export default CheckBox;
