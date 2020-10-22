import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function GrainLunchScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Grain Recipes for Lunch</h2>
      <RecipeComponent meal ="lunch" category="grain"/>
    </div>
  );
}

export default GrainLunchScreen;