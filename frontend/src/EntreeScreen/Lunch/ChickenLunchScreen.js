import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function ChickenLunchScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Chicken Recipes for Lunch</h2>
      <RecipeComponent meal ="lunch" category="chicken"/>
    </div>
  );
}

export default ChickenLunchScreen;