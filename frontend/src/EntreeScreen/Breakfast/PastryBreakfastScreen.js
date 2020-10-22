import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function PastryBreakfastScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Pastry Recipes for Breakfast</h2>
      <RecipeComponent meal ="breakfast" category="pastry"/>
    </div>
  );
}

export default PastryBreakfastScreen;