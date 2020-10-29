import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function FruitBreakfastScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Fruit Recipes for Breakfast</h2>
      <RecipeComponent meal ="breakfast" category="fruit"/>
    </div>
  );
}

export default FruitBreakfastScreen;