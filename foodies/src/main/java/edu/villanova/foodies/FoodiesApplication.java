package edu.villanova.foodies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import edu.villanova.foodies.repository.RecipeRepository;

@SpringBootApplication
public class FoodiesApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodiesApplication.class, args);
	}

	@Autowired
	private RecipeRepository recipeRepository;
}
