import * as React from "react";
import * as ReactDOM from "react-dom/client";
import MyApp from "./App";

class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<MyApp />);
  }
}
customElements.define("x-search", XSearch);

export default XSearch;
