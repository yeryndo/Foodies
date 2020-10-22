import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function NonDairyScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Non-Dairy Recipes</h2>
      <RecipeComponent meal ="dietary" category="nondairy"/>
    </div>
  );
}

export default NonDairyScreen;