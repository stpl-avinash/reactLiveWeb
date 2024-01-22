import React from "react";
// import ToDoListApp from "./ToDoListApp";
// import TableList from "./TableList";

import { Routes, Route } from "react-router-dom"
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Header from "./Component/Header";

function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
      {/* <Route  path="/" element={ <Header/> } /> */}
      <Route path="/" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
    </Routes>
  </div>
  );
}

export default App;
