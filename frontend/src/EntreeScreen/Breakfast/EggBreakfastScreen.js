import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function EggBreakfastScreen() {
  return (
    <div>
      <h2>List of Egg Recipes for Breakfast</h2>
      <RecipeComponent meal ="breakfast" category="eggs"/>
    </div>
  );
}

export default EggBreakfastScreen;