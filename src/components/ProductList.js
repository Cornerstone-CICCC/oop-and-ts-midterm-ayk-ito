import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  render(productItems) {
    const productListElements = productItems.map((item) => new ProductItem().render(item));
    const productList = document.createElement("div");
    productList.className = "productList";
    productListElements.forEach((element) => {
      productList.appendChild(element);
    });

    return productList;
  }
}
