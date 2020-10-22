import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function AlcoholScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Alcoholic Recipes</h2>
      <RecipeComponent meal ="drink" category="alcohol"/>
    </div>
  );
}

export default AlcoholScreen;