import * as ReactDOM from "react-dom/client";
import MyApp from "./App";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

class XInbound extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const frame = document.createElement("div");
    shadow.appendChild(frame);

    const cache = createCache({
      key: "x-inbound",
      container: shadow,
    });

    const root = ReactDOM.createRoot(frame, { identifierPrefix: "inbound" });
    root.render(
      <CacheProvider value={cache}>
        <MyApp />
      </CacheProvider>
    );
  }
}

customElements.define("x-inbound", XInbound);
