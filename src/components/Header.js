import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const headerElement = document.createElement("div");
    headerElement.textContent = "SHOP";
    headerElement.className = "headerText fontOswald";

    return headerElement;
  }
}
