import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function VegetableLunchScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Vegetable Recipes for Lunch</h2>
      <RecipeComponent meal ="lunch" category="vegetable"/>
    </div>
  );
}

export default VegetableLunchScreen;