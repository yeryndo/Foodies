import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function YogurtBreakfastScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Yogurt Recipes for Breakfast</h2>
      <RecipeComponent meal ="breakfast" category="yogurt"/>
    </div>
  );
}

export default YogurtBreakfastScreen;