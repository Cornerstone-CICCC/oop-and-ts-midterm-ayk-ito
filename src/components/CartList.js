import { Component } from "../common/Component.js";
import cartContext from "../contexts/CartContext.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor() {
    super();
    this.cartContext = cartContext;
    const cartListListener = () => {
      this.reRender();
    };

    this.cartContext.addListener(cartListListener);
  }

  reRender() {
    this.cartContext.cartItems.length;
    const total = this.cartContext.cartItems.reduce(
      (a, b) => {
        return { price: a.price * a.count + b.price * b.count, count: 1 };
      },
      { price: 0, count: 1 }
    );

    const countItem = this.cartContext.cartItems.reduce(
      (a, b) => {
        return { count: a.count + b.count };
      },
      { count: 0 }
    );
    console.log(this.cartContext.cartItems);
    console.log(total);

    const cartArea = document.getElementById("wrapper-cartArea");
    cartArea.innerHTML = "";

    const cartHeader = document.createElement("div");
    cartHeader.className = "cartNum fontOswald";
    cartHeader.innerHTML = `<div>Cart Item : ${countItem.count}</div>`;
    cartArea.appendChild(cartHeader);
    const cartList = this.render();
    cartArea.appendChild(cartList);
    const cartFooter = document.createElement("div");
    cartFooter.className = "itemTotal fontOswald";
    cartFooter.textContent = `Total : $ ${total.price.toFixed(2)}`;
    cartArea.appendChild(cartFooter);
  }

  render() {
    const cartItems = cartContext.cartItems;

    const cartItemListElements = cartItems.map((item) =>
      new CartItem(this.cartContext).render(item)
    );
    const cartList = document.createElement("div");
    cartList.id = "cart-items";
    cartList.className = "items";

    cartItemListElements.forEach((element) => {
      cartList.appendChild(element);
    });

    return cartList;
  }
}
