import React from "react";
import RecipeComponent from "../../Components/RecipeComponent";

function JuiceScreen() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 35 }}>List of Juice Recipes</h2>
      <hr 
        style={{
          color: '#E1B067',
          backgroundColor: '#E1B067',
          height: 2
        }}
      />
      <RecipeComponent meal ="drink" category="juice"/>
    </div>
  );
}

export default JuiceScreen;