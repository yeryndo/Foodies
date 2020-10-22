import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";
function PancakeBreakfastScreen() {
  return (
    <div>
      <h2>List of Pancake and Waffle Recipes for Breakfast</h2>
      <RecipeComponent meal ="breakfast" category="pancake"/>
    </div>
    
  );
}

export default PancakeBreakfastScreen;