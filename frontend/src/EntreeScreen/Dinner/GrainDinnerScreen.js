import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function GrainDinnerScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Grain Recipes for Dinner</h2>
      <RecipeComponent meal ="dinner" category="grain"/>
    </div>
  );
}

export default GrainDinnerScreen;