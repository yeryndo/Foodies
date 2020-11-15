package edu.villanova.foodies.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.villanova.foodies.model.Recipe;
import edu.villanova.foodies.repository.RecipeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
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
        return recipeRepository.findAll();
    }

    //only for testing
    // @RequestMapping(value = "/all", method = RequestMethod.POST)
    // public void process(@RequestBody Map<String, Object>[] payload) throws Exception {
    //      System.out.println(payload);
    // }

    @GetMapping("recipe/{recipeId}")
    public ResponseEntity<Recipe> getRecipe(@PathVariable String recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId).get();
        if (recipe != null) {
            return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); // gives 500 error right now, and not 404
    }

    @PostMapping(value = "recipe/createRecipe")
    public Recipe addNewRecipe(@PathVariable Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @DeleteMapping(value = "recipe/{recipeId}")
    public String deleteRecipe(@PathVariable String recipeId) {
        recipeRepository.deleteById(recipeId);
        return "Successfully deleted";
    }

    @GetMapping("/{meal}/{category}")
    public List<Recipe> getRecipesByCategoryInBreakfast(@PathVariable String category, @PathVariable String meal) {
        return recipeRepository.findRecipeByMealAndCategory(meal, category);
    }
}