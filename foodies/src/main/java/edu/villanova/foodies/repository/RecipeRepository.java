package edu.villanova.foodies.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import edu.villanova.foodies.model.Recipe;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String> {
    // @Query(value = "{criteria : ?0}", sort = "{title : -1}")
    List<Recipe> findRecipeByCategory(String category);
}