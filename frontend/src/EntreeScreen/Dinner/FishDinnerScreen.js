import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function FishDinnerScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Fish Recipes for Dinner</h2>
      <RecipeComponent meal ="dinner" category="fish"/>
    </div>
  );
}

export default FishDinnerScreen;