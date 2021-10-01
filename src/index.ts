import data from "./db/data.js";
import IngredientEntry from "./components/IngredientEntry.js";
import { setUpCalculator } from "./components/Calculator.js";

const { ingredients } = data;
const PEOPLE = 4;

ingredients.forEach((ingredient) => {
  const item = new IngredientEntry(ingredient, PEOPLE);
  item.appendTo("[data-calculator]");
});

setUpCalculator(".btn", PEOPLE);
