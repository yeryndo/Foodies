package edu.villanova.foodies.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.villanova.foodies.model.Drink;
import edu.villanova.foodies.repository.DrinkRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("drink")
public class DrinkController {
    private final DrinkRepository drinkRepository;

    public DrinkController(DrinkRepository drinkRepository) {
        this.drinkRepository = drinkRepository;
    }

    @GetMapping("/allDrinks")
    public List<Drink> getAllDrinks() {
        // LOG.info("Getting all drinks.");
        return drinkRepository.findAll();
    }

    @GetMapping("/{drinkId}")
    public ResponseEntity<Drink> getRecipe(@PathVariable String drinkId) {
        Drink drink = drinkRepository.findById(drinkId).get();
        if (drink != null) {
            return new ResponseEntity<Drink>(drink, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); // gives 500 error right now, and not 404
    }

    @PostMapping(value = "/createDrink")
    public Drink addNewRecipe(@RequestBody Drink drink) {
        return drinkRepository.save(drink);
    }

    @DeleteMapping(value = "/{drinkId}")
    public String deleteRecipe(@PathVariable String drinkId) {
        drinkRepository.deleteById(drinkId);
        return "Successfully deleted";
    }
}