import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import routes from "./routes";
import internalRoutes from "./internalRoutes";



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
                      element = {<route.layout>
                          <internalRoute.component/>
                      </route.layout>}
                  />
              ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App