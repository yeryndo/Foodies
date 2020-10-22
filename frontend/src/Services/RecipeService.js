import axios from 'axios'

class RecipeService {
    getRecipes(typeOfMeal, typeOfCategory) {
        var meal = typeOfMeal
        var category = typeOfCategory
        return axios.get(`http://localhost:8000/${meal}/${category}`);
    }
}

export default new RecipeService();