export default class IngredientEntry {
  data: Ingredient;
  pp: number;

  constructor(data: Ingredient, pp: number) {
    this.data = data;
    this.pp = pp;
  }

  _createContent() {
    let { name, amount, unit } = this.data;
    amount = amount.replace(",", ".");
    return `
      <span class="ingredient"> ${name} </span>
      <span class="ammount-display">
        <span class="ammount" data-minamount="${
          parseFloat(amount) / this.pp
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
