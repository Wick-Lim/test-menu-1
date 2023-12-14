import * as ReactDOM from "react-dom/client";
import MyApp from "./App";

class XInbound extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const frame = document.createElement("div");
    shadow.appendChild(frame);

    const root = ReactDOM.createRoot(frame, { identifierPrefix: 'inbound' });
    root.render(<MyApp />);
  }
}

customElements.define("x-inbound", XInbound);
