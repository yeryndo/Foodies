package edu.villanova.foodies.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import edu.villanova.foodies.model.Drink;

@Repository
public interface DrinkRepository extends MongoRepository<Drink, String> {
}
