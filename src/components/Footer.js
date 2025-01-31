import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footerElement = document.createElement("div");
    footerElement.textContent = "Copyright © 2025 Ayaka Ito All Rights Reserved.";
    footerElement.className = "footerText fontOswald";

    return footerElement;
  }
}
