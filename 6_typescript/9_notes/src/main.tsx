import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store.ts";
import { Provider } from "react-redux";

// MUI'nin tema sistemi
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#fff" },
    secondary: { main: "rgb(105,105,105)" },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
