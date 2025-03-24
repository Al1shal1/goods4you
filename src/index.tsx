import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import {setupStore} from './store'
import React from "react";
import { HelmetProvider } from "react-helmet-async";

const store = setupStore();

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
<React.StrictMode>
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>
</React.StrictMode>
);
