import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function CoffeeScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Coffee Recipes</h2>
      <RecipeComponent meal ="drink" category="coffee"/>
    </div>
  );
}

export default CoffeeScreen;