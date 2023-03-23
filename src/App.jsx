import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="/mainPage"></Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
