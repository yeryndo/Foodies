import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function GrainLunchScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Grain Recipes for Lunch</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="lunch" category="grain"/>
    </div>
  );
}

export default GrainLunchScreen;