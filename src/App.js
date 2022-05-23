import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import routes from "./routes";
import internalRoutes from "./internalRoutes";
import visitorRoutes from "./visitorRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/global.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}>
              {internalRoutes.map((internalRoute,index2) => (
                  <Route
                      key={index2}
                      path={internalRoute.path}
                      element = {<route.layout rol={route.path}>
                          <internalRoute.component/>
                      </route.layout>}
                  />
              ))}
            </Route>
        ))}
        {visitorRoutes.map((visitorRoute,index3) => (
            <Route
              key={index3}
              path={visitorRoute.path}
              element = {<visitorRoute.layout side={visitorRoute.path === "/"}>
                  <visitorRoute.component/>
              </visitorRoute.layout>}
            />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App