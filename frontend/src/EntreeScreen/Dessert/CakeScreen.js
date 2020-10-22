import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function CakeScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Cake Recipes for Dessert</h2>
      <RecipeComponent meal ="dessert" category="cake"/>
    </div>
  );
}

export default CakeScreen;