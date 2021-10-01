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
    Math.max(0, val);
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
      const numberAmount = parseInt(amount);
      element.innerText = `${numberAmount * this.pp}`;
    }
  }

  getAllAmountContainers() {
    return document.querySelectorAll(".ammount");
  }

  init() {
    this.buttons.forEach((button) => {
      const isAddButton = Array.from(button.classList).includes("add");
      const cb = isAddButton ? () => this.pp++ : () => this.pp--;
      button.addEventListener("click", () => {
        cb();
      });
    });
  }
}
