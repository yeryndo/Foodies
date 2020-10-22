import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function OatmealBreakfastScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Oatmeal Recipes for Breakfast</h2>
      <RecipeComponent meal ="breakfast" category="oatmeal"/>
    </div>
  );
}

export default OatmealBreakfastScreen;