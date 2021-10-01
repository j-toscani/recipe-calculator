import data from "./db/data.js";
import IngredientEntry from "./components/IngredientEntry.js";

const { ingredients } = data;

ingredients.forEach((ingredient) => {
  const item = new IngredientEntry(ingredient, 4);
  item.appendTo("[data-calculator]");
});
