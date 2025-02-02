export class CartContext {
  constructor() {
    this.cartItems = [];
    this.listeners = [];
  }

  addProduct(product) {
    const cartExist = this.cartItems.find((cartItem) => cartItem.id === product.id);
    if (cartExist) {
      cartExist.count++;
    } else {
      this.cartItems.push({ ...product, count: 1 });
      console.log(this.cartItems);
    }
    this.notifyListeners();
  }

  plusQuantity(id) {
    const cartExist = this.cartItems.find((cartItem) => cartItem.id === id);
    if (cartExist) {
      cartExist.count++;
    }
    this.notifyListeners();
  }

  minusQuantity(id) {
    const cartExist = this.cartItems.find((cartItem) => cartItem.id === id);
    if (cartExist) {
      cartExist.count--;
    }
    if (cartExist.count <= 0) {
      this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== id);
    }
    this.notifyListeners();
  }

  removeProduct(id) {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== id);
    this.notifyListeners();
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.cartItems));
  }
}
const cartContext = new CartContext();
export default cartContext;
