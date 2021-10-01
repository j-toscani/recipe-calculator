export default class IngredientEntry {
  data: Ingredient;
  pp: number;

  constructor(data: Ingredient, pp: number) {
    this.data = data;
    this.pp = pp;
  }

  _createContent() {
    const { name, amount, unit } = this.data;

    return `
      <span class="ingredient"> ${name} </span>
      <span class="ammount-display">
        <span class="ammount" data-minamount="${
          parseInt(amount) / this.pp
        }">${amount}</span>
        <span class="unit">${unit}</span>
      </span>
      `;
  }

  appendTo(query: string = "[data-calculator]") {
    const li = document.createElement("li");
    li.classList.add("calc-ingredients-list-item");
    const content = this._createContent();
    li.innerHTML = content;
    document.querySelector(query)?.append(li);
  }
}
