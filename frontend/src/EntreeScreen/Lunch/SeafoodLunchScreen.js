import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function SeafoodLunchScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Seafood Recipes for Lunch</h2>
      <RecipeComponent meal ="lunch" category="seafood"/>
    </div>
  );
}

export default SeafoodLunchScreen;