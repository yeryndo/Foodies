import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function FishLunchScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Fish Recipes for Lunch</h2>
      <RecipeComponent meal ="lunch" category="fish"/>
    </div>
  );
}

export default FishLunchScreen;