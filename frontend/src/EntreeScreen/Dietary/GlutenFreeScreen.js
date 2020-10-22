import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function GlutenScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Gluten Free Recipes</h2>
      <RecipeComponent meal ="dietary" category="glutenfree"/>
    </div>
  );
}

export default GlutenScreen;