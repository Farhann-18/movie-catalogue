/* eslint-disable no-unused-vars */
import 'regenerator-runtime';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import WebWorkerRegister from './utils/webWorkerRegister';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await WebWorkerRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
