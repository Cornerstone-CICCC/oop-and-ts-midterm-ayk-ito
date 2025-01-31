import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(prop) {
    super();
    this.cartContext = prop;
  }

  render(item) {
    // const removeButtonElement = document.createElement("button");
    // removeButtonElement.className = "fa-solid fa-trash";
    // removeButtonElement.onclick = () => this.cartContext.addProduct(item);
    // removeButtonElement.textContent = "BUY";

    const cartItemListElement = document.createElement("div");
    cartItemListElement.className = "item";
    cartItemListElement.innerHTML = `
                <div class="imageArea">
              <img
                src="${item.image}"
                alt=""
                height="150"
              />
            </div>
            <div class="itemInfo">
              <div>${item.title}</div>
              <div>$ ${item.price}</div>
              <div class="buttonArea">
                <button class="removeCart"><i class="fa-solid fa-trash"></i></button>
                <div class="itemCount">
                  <button class="minusCart"><i class="fa-solid fa-minus"></i></button>
                  <div class="countNum">${item.count}</div>
                  <button class="plusCart"><i class="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </div>
    
    `;

    const removeButton = cartItemListElement.getElementsByClassName("removeCart")[0];
    removeButton.onclick = () => this.cartContext.removeProduct(item.id);

    const minusButton = cartItemListElement.getElementsByClassName("minusCart")[0];
    minusButton.onclick = () => this.cartContext.minusQuantity(item.id);

    const plusButton = cartItemListElement.getElementsByClassName("plusCart")[0];
    plusButton.onclick = () => this.cartContext.plusQuantity(item.id);

    return cartItemListElement;
  }
}
