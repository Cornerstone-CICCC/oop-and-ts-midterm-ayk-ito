import { Component } from "../common/Component.js";
import cartContext from "../contexts/CartContext.js";

import { CartItem } from "./CartItem.js";

export class ProductItem extends Component {
  constructor() {
    super();
    this.cartContext = cartContext;
  }

  render(item) {
    const buttonElement = document.createElement("button");
    buttonElement.className = "AddCart";
    buttonElement.onclick = () => this.cartContext.addProduct(item);
    buttonElement.textContent = "BUY";

    const productListElement = document.createElement("div");
    productListElement.className = "product";
    productListElement.innerHTML = `
            <div class="productImage">
              <img
                src="${item.image}"
                alt=""
                height="350"
              />
            </div>
            <div class="productInfo">
              <div class="productTitle">${item.title}</div>
              <div>$ ${item.price}</div>
              <div class="buttonArea buyButton"></div>
            </div>
    `;

    productListElement.querySelector(".buttonArea").appendChild(buttonElement);
    return productListElement;
  }
}
