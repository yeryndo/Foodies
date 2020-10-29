package edu.villanova.foodies.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "recipes")
public class Recipe {
    @Id
    private String id;

    private String name;
    private String meal;
    private int calories;
    private int servingSize;
    private int estimateTime;
    private String category;
    private String imageUrl;
    private String detail;
    private String instructions;

    public Recipe() {
    }

    public Recipe(String name, String meal, String category, String detail, String imageUrl, String[] ingredients, String instructions) {
        this.name = name;
        this.meal = meal;
        this.category = category;
        this.detail = detail;
        this.imageUrl = imageUrl;
        this.instructions = instructions;
    }

    public Recipe(String name, String meal, int calories, int servingSize, int estimateTime, String category,
            String imageUrl, String detail) {
        this.name = name;
        this.meal = meal;
        this.calories = calories;
        this.servingSize = servingSize;
        this.estimateTime = estimateTime;
        this.category = category;
        this.imageUrl = imageUrl;
        this.detail = detail;
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

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getMeal() {
        return meal;
    }

    public void setMeal(String meal) {
        this.meal = meal;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }
}