
import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function SeafoodDinnerScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Seafood Recipes for Dinner</h2>
      <RecipeComponent meal ="dinner" category="seafood"/>
    </div>
  );
}

export default SeafoodDinnerScreen;