package edu.villanova.foodies.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.villanova.foodies.model.Recipe;
import edu.villanova.foodies.repository.RecipeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("recipe")
public class RecipeController {

    private final RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping(value = "/", produces = MediaType.TEXT_PLAIN_VALUE)
    public String index() {
        return "This is the Home Page for recipes";
    }

    @GetMapping("/allRecipes")
    public List<Recipe> getAllRecipes() {
        // LOG.info("Getting all recipes.");
        return recipeRepository.findAll();
    }

    @GetMapping("/{recipeId}")
    public ResponseEntity<Recipe> getRecipe(@PathVariable String recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId).get();
        if (recipe != null) {
            return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); // gives 500 error right now, and not 404
    }

    @PostMapping(value = "/createRecipe")
    public Recipe addNewRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @DeleteMapping(value = "/{recipeId}")
    public String deleteRecipe(@PathVariable String recipeId) {
        recipeRepository.deleteById(recipeId);
        return "Successfully deleted";
    }

    @GetMapping("/pancakeBreakfast")
    public List<Recipe> getPancakeRecipes() {
        return recipeRepository.findRecipeByCategory("Pancake");
    }
}