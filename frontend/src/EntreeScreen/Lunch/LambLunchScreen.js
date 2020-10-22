import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function LambLunchScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Lamb Recipes for Lunch</h2>
      <RecipeComponent meal ="lunch" category="lamb"/>
    </div>
  );
}

export default LambLunchScreen;