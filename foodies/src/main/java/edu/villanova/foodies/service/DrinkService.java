package edu.villanova.foodies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.villanova.foodies.repository.DrinkRepository;

@Service
public class DrinkService {

    @Autowired
    private DrinkRepository drinkRepository;
}
