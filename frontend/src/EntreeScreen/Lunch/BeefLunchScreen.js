import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function BeefLunchScreen() {
  return (
    <div>
      <h2 style={{ padding: 30 }}>List of Beef Recipes for Lunch</h2>
      <RecipeComponent meal ="lunch" category="beef"/>
    </div>
  );
}

export default BeefLunchScreen;