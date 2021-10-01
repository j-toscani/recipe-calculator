class Calculator {
  query: string;
  _pp: number;

  constructor(buttonQuery: string, pp: number) {
    this.query = buttonQuery;
    this._pp = pp;
  }

  get buttons() {
    return document.querySelectorAll(this.query);
  }

  set pp(val: number) {
    if (val < 0) {
      val = 0;
    }
    this._pp = val;
    this.update();
  }

  update() {
    const elements = this.getAllAmountContainers();
    elements.forEach((element) =>
      this.updateAmount(element as HTMLSpanElement)
    );
  }

  updateAmount(element: HTMLSpanElement) {
    const amount = element.getAttribute("data-minamount");
    if (amount) {
      const numberAmount = parseFloat(amount);
      element.innerText = `${numberAmount * this._pp}`;
    }
  }

  getAllAmountContainers() {
    return document.querySelectorAll(".ammount");
  }

  init() {
    this.buttons.forEach((button) => {
      const isAddButton = Array.from(button.classList).includes("add");
      if (isAddButton) {
        button.addEventListener("click", () => {
          this.pp = this._pp + 1;
        });
      } else {
        button.addEventListener("click", () => {
          this.pp = this._pp - 1;
        });
      }
    });
  }
}

export function setUpCalculator(buttonQuery: string, pp: number) {
  const calc = new Calculator(buttonQuery, pp);
  calc.init();
}
