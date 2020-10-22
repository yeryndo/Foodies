import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function PorkDinnerScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Pork Recipes for Dinner</h2>
      <RecipeComponent meal ="dinner" category="pork"/>
    </div>
  );
}

export default PorkDinnerScreen;