import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function ChickenDinnerScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Chicken Recipes for Dinner</h2>
      <RecipeComponent meal ="dinner" category="chicken"/>
    </div>
  );
}

export default ChickenDinnerScreen;