  
import React from "react";
import PostListofRecipes from "../Grid/PostListofRecipes";


function HomeScreen() {
  return (
    <div>
      <h2 style={{ padding: 40 }}>Recommendations for Today</h2>
      <PostListofRecipes/>
    </div>
  );
}

export default HomeScreen;