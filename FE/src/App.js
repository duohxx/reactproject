import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
    </ThemeProvider>
  );
}




// import React from "react"
// import ReactDOM from "react-dom"

// import { HashRouter, Route, Routes } from 'react-router-dom'
// import { Provider } from 'react-redux'

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// // Material Kit 2 React themes
// import theme from "assets/theme";

// // import store from './redux/store'
// import Register from './containers/Register/register'
// import SignIn from './containers/SignIn/signIn'
// import Main from './containers/main/main'

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//   <CssBaseline />
//       <Routes>
//         <Route path='/register' element={<Register />}></Route>
//         <Route path='/signIn' element={<SignIn />}></Route>
//         <Route element={<Main />}></Route>
//       </Routes>
//     </ThemeProvider>,
//   document.getElementById("root")
// );
