import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function PieScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Pie Recipes for Dessert</h2>
      <RecipeComponent meal ="dessert" category="pie"/>
    </div>
  );
}

export default PieScreen;