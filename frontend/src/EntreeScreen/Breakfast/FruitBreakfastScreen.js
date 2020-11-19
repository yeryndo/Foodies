import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function FruitBreakfastScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Fruit Recipes for Breakfast</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="breakfast" category="fruit"/>
    </div>
  );
}

export default FruitBreakfastScreen;