import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function PorkLunchScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Pork Recipes for Lunch</h2>
      <RecipeComponent meal ="lunch" category="pork"/>
    </div>
  );
}

export default PorkLunchScreen;