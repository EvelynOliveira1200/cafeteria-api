
class Menu {
  constructor() {
    this.menu = [];
  }

  addItem(item) {
    this.menu.push(item);
  }

  removeItem(item) {
    this.menu = this.menu.filter((menuItem) => menuItem !== item);
  }

  getMenu() {
    return this.menu;
  }
}

module.exports = Menu;