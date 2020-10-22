import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function VegetableDinnerScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Vegetable Recipes for Dinner</h2>
      <RecipeComponent meal ="dinner" category="vegetable"/>
    </div>
  );
}

export default VegetableDinnerScreen;