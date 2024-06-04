import React from "react";
import ReactDOM from "react-dom/client";

import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MyNavbar from "./componnents/myNavbar";
import About from "./pages/About";
import Flowers from "./pages/Flowers";
import Signin from "./pages/Signin";
import Home from "./pages/home";

const theme = createTheme({
  palette: {
    
    secondary: {
      main: "#522d47",
    },
    background:{
      default:"#f1c7e5",
    }
  },
  
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/flowers" element={<Flowers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

function Layout() {
  return (
    <Box>
      <MyNavbar />
      <Box
      sx={{
        margin: "auto",
        padding: "2rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Outlet />
   </Box>
    </Box>
  );
}
