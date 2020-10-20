import axios from 'axios'

const RECIPES_REST_API_URL = 'http://localhost:8000/recipe/allRecipes'

class RecipeService {
    getRecipes() {
        return axios.get(RECIPES_REST_API_URL);
    }
}

export default new RecipeService();