import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function YogurtBreakfastScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Yogurt Recipes for Breakfast</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="breakfast" category="yogurt"/>
    </div>
  );
}

export default YogurtBreakfastScreen;