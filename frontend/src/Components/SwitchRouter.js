import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./SearchScreen";
import DisplayRecipes from "./DisplayRecipes";

import BreakfastScreen from "./Screens/BreakfastScreen";
import LunchScreen from "./Screens/LunchScreen";
import DinnerScreen from "./Screens/DinnerScreen";
import DietaryfastScreen from "./Screens/DietaryScreen";
import DrinkScreen from "./Screens/DrinkScreen";
import DessertScreen from "./Screens/DessertScreen";

import EggBreakfastScreen from "../EntreeScreen/Breakfast/EggBreakfastScreen"
import OatmealBreakfastScreen from "../EntreeScreen/Breakfast/OatmealBreakfastScreen";
import PancakeBreakfastScreen from "../EntreeScreen/Breakfast/PancakeBreakfastScreen";
import BreadBreakfastScreen from "../EntreeScreen/Breakfast/BreadsBreakfastScreen";
import PastryBreakfastScreen from "../EntreeScreen/Breakfast/PastryBreakfastScreen";
import FruitBreakfastScreen from "../EntreeScreen/Breakfast/FruitBreakfastScreen";
import YogurtBreakfastScreen from "../EntreeScreen/Breakfast/YogurtBreakfastScreen";

import ChickenLunchScreen from "../EntreeScreen/Lunch/ChickenLunchScreen";
import BeefLunchScreen from "../EntreeScreen/Lunch/BeefLunchScreen";
import FishLunchScreen from "../EntreeScreen/Lunch/FishLunchScreen";
import LambLunchScreen from "../EntreeScreen/Lunch/LambLunchScreen";
import SeafoodLunchScreen from "../EntreeScreen/Lunch/SeafoodLunchScreen";
import GrainLunchScreen from "../EntreeScreen/Lunch/GrainLunchScreen";
import PorkLunchScreen from "../EntreeScreen/Lunch/PorkLunchScreen";
import VegetableLunchScreen from "../EntreeScreen/Lunch/VegetableLunchScreen";

import BeefDinnerScreen from "../EntreeScreen/Dinner/BeefDinnerScreen";
import ChickenDinnerScreen from "../EntreeScreen/Dinner/ChickenDinnerScreen";
import FishDinnerScreen from "../EntreeScreen/Dinner/FishDinnerScreen";
import GrainDinnerScreen from "../EntreeScreen/Dinner/GrainDinnerScreen";
import LambDinnerScreen from "../EntreeScreen/Dinner/LambDinnerScreen";
import PorkDinnerScreen from "../EntreeScreen/Dinner/PorkDinnerScreen";
import SeafoodDinnerScreen from "../EntreeScreen/Dinner/SeafoodDinnerScreen";
import VegetableDinnerScreen from "../EntreeScreen/Dinner/VegetableDinnerScreen";

import NonDairyScreen from "../EntreeScreen/Dietary/NonDairyScreen";
import GlutenScreen from "../EntreeScreen/Dietary/GlutenFreeScreen";

import CoffeeScreen from "../EntreeScreen/Drink/CoffeeScreen";
import JuiceScreen from "../EntreeScreen/Drink/JuiceScreen";
import TeaScreen from "../EntreeScreen/Drink/TeaScreen";
import SmoothieScreen from "../EntreeScreen/Drink/Smoothie";
import AlcoholScreen from "../EntreeScreen/Drink/AlcoholScreen";

import CakeScreen from "../EntreeScreen/Dessert/CakeScreen";
import BrowniesScreen from "../EntreeScreen/Dessert/BrowniesScreen";
import PieScreen from "../EntreeScreen/Dessert/PieScreen";
import IcecreamScreen from "../EntreeScreen/Dessert/IcecreamScreen";
import CookieScreen from "../EntreeScreen/Dessert/CookiesScreen";

const SwitchRouter = () => {
    return (
        <Switch>
          <Route path = "/" exact component={HomeScreen} />
          <Route exact path = "/search" component = {SearchScreen} />
          <Route exact path = "/display" component = {DisplayRecipes} />

          <Route exact path = "/breakfast" component={BreakfastScreen} />
          <Route exact path = "/lunch" component={LunchScreen} />
          <Route exact path = "/dinner" component={DinnerScreen} />
          <Route exact path = '/dessert' component = {DessertScreen} />
          <Route exact path = '/dietary' component = {DietaryfastScreen} />
          <Route exact path = '/drink' component = {DrinkScreen} />

          <Route path = "/lunch/chicken" component={ChickenLunchScreen} />
          <Route path = "/lunch/beef" component={BeefLunchScreen} />
          <Route path = "/lunch/fish" component={FishLunchScreen} />
          <Route path = "/lunch/lamb" component={LambLunchScreen} />
          <Route path = "/lunch/seafood" component={SeafoodLunchScreen} />
          <Route path = "/lunch/grain" component={GrainLunchScreen} />
          <Route path = "/lunch/pork" component={PorkLunchScreen} />
          <Route path = "/lunch/vegetable" component={VegetableLunchScreen} />

          <Route path = "/breakfast/eggs" component = {EggBreakfastScreen } />
          <Route path = "/breakfast/pancake" component = {PancakeBreakfastScreen} />
          <Route path = "/breakfast/bread" component = {BreadBreakfastScreen} />
          <Route path = "/breakfast/oatmeal" component = {OatmealBreakfastScreen} />
          <Route path = "/breakfast/pastry" component = {PastryBreakfastScreen} />
          <Route path = "/breakfast/fruit" component = {FruitBreakfastScreen} />
          <Route path = "/breakfast/yogurt" component = {YogurtBreakfastScreen} />

          <Route path = "/dinner/beef" component = {BeefDinnerScreen} />
          <Route path = "/dinner/chicken" component = {ChickenDinnerScreen} />
          <Route path = "/dinner/fish" component = {FishDinnerScreen} />
          <Route path = "/dinner/grain" component = {GrainDinnerScreen} />
          <Route path = "/dinner/lamb" component ={LambDinnerScreen} />
          <Route path = "/dinner/pork" component = {PorkDinnerScreen} />
          <Route path = "/dinner/seafood" component = {SeafoodDinnerScreen} />
          <Route path = "/dinner/vegetable" component = {VegetableDinnerScreen} />

          <Route path = "/dietary/nondairy" component = {NonDairyScreen} />
          <Route path = "/dietary/glutenfree" component = {GlutenScreen} />

          <Route path = "/drink/coffee" component = {CoffeeScreen} />
          <Route path = "/drink/juice" component = {JuiceScreen} />
          <Route path = "/drink/tea" component = {TeaScreen} />
          <Route path = "/drink/smoothie" component = {SmoothieScreen} />
          <Route path = "/drink/alcohol" component = {AlcoholScreen} />

          <Route path = "/dessert/cake" component = {CakeScreen} />
          <Route path = "/dessert/brownies" component = {BrowniesScreen} />
          <Route path = "/dessert/pie" component = {PieScreen} />
          <Route path = "/dessert/icecream" component = {IcecreamScreen} />
          <Route path = "/dessert/cookies" component = {CookieScreen} />
        </Switch>  
    );
  };
export default SwitchRouter;
  