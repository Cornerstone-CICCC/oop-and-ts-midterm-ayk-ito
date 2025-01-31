export class CartContext {
  constructor() {
    /*[
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        },
        count:1
    },
    ]
    */
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
