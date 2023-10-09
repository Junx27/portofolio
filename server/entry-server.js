import { jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
const App$1 = "";
function App() {
  useState(0);
  return /* @__PURE__ */ jsx("h1", { children: "Hello" });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
