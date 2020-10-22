import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function BrowniesScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Brownie Recipes for Dessert</h2>
      <RecipeComponent meal ="dessert" category="brownie"/>
    </div>
  );
}

export default BrowniesScreen;