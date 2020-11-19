import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function SeafoodLunchScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Seafood Recipes for Lunch</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="lunch" category="seafood"/>
    </div>
  );
}

export default SeafoodLunchScreen;