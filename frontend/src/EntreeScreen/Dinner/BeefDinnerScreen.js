import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function BeefDinnerScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Beef Recipes for Dinner</h2>
      <RecipeComponent meal ="dinner" category="beef"/>
    </div>
  );
}

export default BeefDinnerScreen;