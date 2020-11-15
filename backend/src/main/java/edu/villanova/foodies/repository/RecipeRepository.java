package edu.villanova.foodies.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import edu.villanova.foodies.model.Recipe;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String> {

    @Query("{'meal' : ?0, 'category' : ?1}")
    public List<Recipe> findRecipeByMealAndCategory(String meal, String category);

    @Query("{'ingredients' : ?0}")
    public List<Recipe> findAllRecipeWithIngredients(List<String> ingredients);
}