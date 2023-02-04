/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line quotes
import "regenerator-runtime";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import "../styles/responsive.css";
import App from "./views/app";
import WebWorkerRegister from "./utils/webWorkerRegister";
import WebSocketInitiator from "./utils/websocket-initiator";
import CONFIG from "./globals/config";

import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", async () => {
  app.renderPage();
  await WebWorkerRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
