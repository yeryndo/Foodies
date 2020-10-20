import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import HomeScreen from "./Components/Screens/HomeScreen";
import BreakfastScreen from "./Components/Screens/BreakfastScreen";
import LunchScreen from "./Components/Screens/LunchScreen";
import DinnerScreen from "./Components/Screens/DinnerScreen";
import ChickenLunchScreen from "./EntreeScreen/Lunch/Chicken/ChickenLunchScreen";
import BeefLunchScreen from "./EntreeScreen/Lunch/Beef/BeefLunchScreen";
import FishLunchScreen from "./EntreeScreen/Lunch/FishLunchScreen";
import LambLunchScreen from "./EntreeScreen/Lunch/LambLunchScreen";
import SeafoodLunchScreen from "./EntreeScreen/Lunch/SeafoodLunchScreen";
import GrainLunchScreen from "./EntreeScreen/Lunch/GrainLunchScreen";
import PorkLunchScreen from "./EntreeScreen/Lunch/PorkLunchScreen";
import VegetableLunchScreen from "./EntreeScreen/Lunch/VegetableLunchScreen";
import EggBreakfastScreen from "./EntreeScreen/Breakfast/EggBreakfastScreen"
import OatmealBreakfastScreen from "./EntreeScreen/Breakfast/OatmealBreakfastScreen";
import PancakeBreakfastScreen from "./EntreeScreen/Breakfast/PancakeBreakfastScreen";
import BreadBreakfastScreen from "./EntreeScreen/Breakfast/BreadsBreakfastScreen";
import PastryBreakfastScreen from "./EntreeScreen/Breakfast/PastryBreakfastScreen";
import FruitBreakfastScreen from "./EntreeScreen/Breakfast/FruiteBreakfastScreen";
import YogurtBreakfastScreen from "./EntreeScreen/Breakfast/YogurtBreakfastScreen";
import BeefDinnerScreen from "./EntreeScreen/Dinner/BeefDinnerScreen";
import ChickenDinnerScreen from "./EntreeScreen/Dinner/ChickenDinnerScreen";
import FishDinnerScreen from "./EntreeScreen/Dinner/FishDinnerScreen";
import GrainDinnerScreen from "./EntreeScreen/Dinner/GrainDinnerScreen";
import LambDinnerScreen from "./EntreeScreen/Dinner/LamDinnerScreen";
import PorkDinnerScreen from "./EntreeScreen/Dinner/PorkDinnerScreen";
import SeafoodDinnerScreen from "./EntreeScreen/Dinner/SeafoodDinnerScreen";
import VegetableDinnerScreen from "./EntreeScreen/Dinner/VegetableDinnerScreen";
import DessertScreen from "./Components/Screens/DessertScreen";
import DietaryfastScreen from "./Components/Screens/DietaryScreen";
import NonDairyScreen from "./EntreeScreen/Dietary/NonDairyScreen";
import GlutonScreen from "./EntreeScreen/Dietary/GlutenFreeScreen";
import CoffeeScreen from "./EntreeScreen/Drink/CoffeeScreen";
import DrinkScreen from "./Components/Screens/DrinkScreen";
import JuiceScreen from "./EntreeScreen/Drink/JuiceScreen";
import TeaScreen from "./EntreeScreen/Drink/TeaScreen";
import SmoothieScreen from "./EntreeScreen/Drink/Smoothie";
import AlcoholScreen from "./EntreeScreen/Drink/AlcoholScreen";
import CakeScreen from "./EntreeScreen/Dessert/CakeScreen";
import BrowniesScreen from "./EntreeScreen/Dessert/BrowniesScreen";
import PieScreen from "./EntreeScreen/Dessert/PieScreen";
import IcecreamScreen from "./EntreeScreen/Dessert/IcecreamScreen";
import CookieScreen from "./EntreeScreen/Dessert/CookiesScreen";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path = "/" exact component={HomeScreen} />
          <Route path = "/breakfast" component={BreakfastScreen} />
          <Route path = "/lunch" component={LunchScreen} />
          <Route path = "/dinner" component={DinnerScreen} />
          <Route path = '/dessert' component = {DessertScreen} />
          <Route path = '/dietary' component = {DietaryfastScreen} />
          <Route path = '/drink' component = {DrinkScreen} />
          <Route path = "/recipe/chickenLunch" component={ChickenLunchScreen} />
          <Route path = "/recipe/beefLunch" component={BeefLunchScreen} />
          <Route path = "/recipe/fishLunch" component={FishLunchScreen} />
          <Route path = "/recipe/lambLunch" component={LambLunchScreen} />
          <Route path = "/recipe/seafoodLunch" component={SeafoodLunchScreen} />
          <Route path = "/recipe/grainLunch" component={GrainLunchScreen} />
          <Route path = "/recipe/porkLunch" component={PorkLunchScreen} />
          <Route path = "/recipe/vegetableLunch" component={VegetableLunchScreen} />
          <Route path = "/recipe/eggsBreakfast" component = {EggBreakfastScreen } />
          <Route path = "/recipe/pancakeBreakfast" component = {PancakeBreakfastScreen} />
          <Route path = "/recipe/breadBreakfast" component = {BreadBreakfastScreen} />
          <Route path = "/recipe/oatmealBreakfast" component = {OatmealBreakfastScreen} />
          <Route path = "/recipe/pastryBreakfast" component = {PastryBreakfastScreen} />
          <Route path = "/recipe/fruitBreakfast" component = {FruitBreakfastScreen} />
          <Route path = "/recipe/yogurtBreakfast" component = {YogurtBreakfastScreen} />
          <Route path = "/recipe/beefDinner" component = {BeefDinnerScreen} />
          <Route path = "/recipe/chickenDinner" component = {ChickenDinnerScreen} />
          <Route path = "/recipe/fishDinner" component = {FishDinnerScreen} />
          <Route path = "/recipe/grainDinner" component = {GrainDinnerScreen} />
          <Route path = "/recipe/lambDinner" component ={LambDinnerScreen} />
          <Route path = "/recipe/porkDinner" component = {PorkDinnerScreen} />
          <Route path = "/recipe/seafoodDinner" component = {SeafoodDinnerScreen} />
          <Route path = "/recipe/vegetableDinner" component = {VegetableDinnerScreen} />
          <Route path = "/recipe/nondairy" component = {NonDairyScreen} />
          <Route path = "/recipe/glutenfree" component = {GlutonScreen} />
          <Route path = "/drink/coffee" component = {CoffeeScreen} />
          <Route path = "/drink/juice" component = {JuiceScreen} />
          <Route path = "/drink/tea" component = {TeaScreen} />
          <Route path = "/drink/smoothie" component = {SmoothieScreen} />
          <Route path = "/drink/alcohol" component = {AlcoholScreen} />
          <Route path = "/drink/cake" component = {CakeScreen} />
          <Route path = "/drink/brownies" component = {BrowniesScreen} />
          <Route path = "/drink/pie" component = {PieScreen} />
          <Route path = "/drink/icecream" component = {IcecreamScreen} />
          <Route path = "/drink/cookies" component = {CookieScreen} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;