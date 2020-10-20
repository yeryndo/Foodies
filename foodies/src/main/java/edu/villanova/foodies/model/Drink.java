package edu.villanova.foodies.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "drinks")
public class Drink {
    @Id
    private String id;
    
    private String name;
    private int calories;
    private int servingSize;
    private int estimateTime;
//    private String[] ingredients;
    
    public Drink() {
    }
    
    public Drink(String name, int calories, int servingSize, int estimateTime) {
        this.name = name;
        this.calories = calories;
        this.servingSize = servingSize;
        this.estimateTime = estimateTime;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getServingSize() {
        return servingSize;
    }

    public void setServingSize(int servingSize) {
        this.servingSize = servingSize;
    }

    public int getEstimateTime() {
        return estimateTime;
    }

    public void setEstimateTime(int estimateTime) {
        this.estimateTime = estimateTime;
    }

//    public String[] getIngredients() {
//        return ingredients;
//    }
//
//    public void setIngredients(String[] ingredients) {
//        this.ingredients = ingredients;
//    }
}
