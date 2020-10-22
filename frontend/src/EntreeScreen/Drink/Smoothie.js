import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function SmoothieScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Smoothie Recipes</h2>
      <RecipeComponent meal ="drink" category="smoothie"/>
    </div>
  );
}

export default SmoothieScreen;