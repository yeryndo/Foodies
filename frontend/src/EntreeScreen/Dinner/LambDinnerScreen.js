import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function LambDinnerScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Lamb Recipes for Dinner </h2>
      <RecipeComponent meal ="dinner" category="lamb"/>
    </div>
  );
}

export default LambDinnerScreen;