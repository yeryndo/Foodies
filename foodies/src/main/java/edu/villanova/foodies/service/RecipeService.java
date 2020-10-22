package edu.villanova.foodies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.villanova.foodies.repository.RecipeRepository;

/*
 * Service layer
 * Specify transactional behavior and mainly delegate calls to Repository
 */
@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

}