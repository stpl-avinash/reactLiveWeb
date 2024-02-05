import React from "react";
// import ToDoListApp from "./ToDoListApp";
// import TableList from "./TableList";

import { Routes, Route } from "react-router-dom"
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import TableList from "./TableList";
import Login from "./Component/login";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Header /> */}
    <Routes>
      {/* <Route  path="/" element={ <Header/> } /> */}
      <Route path="" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="table" element={ <TableList/> } />
      <Route path="login" element={ <Login/> } />
    </Routes>
  </div>
  );
}

export default App;
