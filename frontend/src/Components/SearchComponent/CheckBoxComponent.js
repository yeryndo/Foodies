import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
 
function CheckBox(props){
 
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
