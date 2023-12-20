import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.js";

 import { register } from 'swiper/element/bundle'
 register();


import theme from "./styles/theme.js";

import { Home } from "./pages/Home/index.jsx";
import { SignUp } from "./pages/SignUp/index.jsx";
import { SignIn } from "./pages/SignIn/index.jsx";
import { PreviewDish } from "./pages/PreviewDish/index.jsx"
import { CreateDish } from "./pages/CreateDish/index.jsx";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>
);
