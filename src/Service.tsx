import * as ReactDOM from "react-dom/client";
import MyApp from "./App";

class XInbound extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const root = ReactDOM.createRoot(shadow);
    root.render(<MyApp />);
  }
}

customElements.define("x-inbound", XInbound);

export default {
  Name: "x-inbound",
  Component: XInbound,
};
