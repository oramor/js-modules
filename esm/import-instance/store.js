class Store {
  constructor() {
    this.value = this.random();
  }

  random() {
    return Math.random();
  }
}

const StoreInst = new Store();
export default StoreInst;
