import axios from 'axios'

const RECIPES_REST_API_URL = 'http://localhost:8000/recipe/pancakeBreakfast'

class PancakeBreakfastService {
    getRecipes() {
        return axios.get(RECIPES_REST_API_URL);
    }
}

export default new PancakeBreakfastService();