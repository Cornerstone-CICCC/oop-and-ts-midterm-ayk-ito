import { Component } from "../common/Component.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { ProductList } from "../components/ProductList.js";
import { CartList } from "../components/CartList.js";

export class App extends Component {
  constructor(cartContext) {
    super();
    this.cartContext = cartContext;
  }
  render() {
    console.log("App.js render called");

    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <header id="wrapper-header"></header>
      <main  class="contents">
        <div class="productArea" id="wrapper-productArea">
          <div class="productListTitle fontOswald headerText">
            <div>Product LIST</div>
          </div>
        </div>
      <nav id="wrapper-cartArea">
        <div class="cartNum fontOswald"><div>Cart Item : 0</div></div>

      </nav>
      </main>
      <footer id="wrapper-footer"></footer>
    `;

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        const products = res;
        const productList = new ProductList().render(products);
        container.querySelector("#wrapper-productArea").appendChild(productList);
      });

    const header = new Header().render();
    const footer = new Footer().render();
    // const productList = new ProductList().render();
    const cartList = new CartList().render();

    container.querySelector("#wrapper-header").appendChild(header);
    container.querySelector("#wrapper-footer").appendChild(footer);
    // container.querySelector("#wrapper-productArea").appendChild(productList);
    container.querySelector("#wrapper-cartArea").appendChild(cartList);

    const cartFooter = document.createElement("div");
    cartFooter.className = "itemTotal fontOswald";
    cartFooter.textContent = "Total : $0";

    container.querySelector("#wrapper-cartArea").appendChild(cartFooter);

    return container;
  }
}
