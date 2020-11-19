import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function PancakeBreakfastScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Pancake and Waffle Recipes for Breakfast</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="breakfast" category="pancake"/>
    </div>
    
  );
}

export default PancakeBreakfastScreen;