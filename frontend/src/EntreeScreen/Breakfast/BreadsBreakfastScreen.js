import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function BreadBreakfastScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Bread based Recipes for Breakfast</h2>
      <RecipeComponent meal ="breakfast" category="bread"/>
    </div>
  );
}

export default BreadBreakfastScreen;