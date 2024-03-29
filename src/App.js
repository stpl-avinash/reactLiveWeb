import React, {useState, useEffect} from "react";
// import ToDoListApp from "./ToDoListApp";
// import TableList from "./TableList";

import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import TableList from "./TableList";
import Login from "./Component/login";
import Dashboard  from "./Component/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const [isShow, setIsShow] = useState(true);
  const location = useLocation();

  useEffect(() => { callFun() }, []);

  const callFun = () => {
    (location.pathname == '/login') ? setIsShow(false) : setIsShow(true);
  }
   
  return (
    <div className="App">
      <ToastContainer closeButton={false} position="top-right" />
      {isShow && <Home />}
      {/* <Header /> */}
    <Routes>
      {/* <Route  path="/" element={ <Header/> } /> */}
      <Route path="home" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="table" element={ <TableList/> } />
      <Route path="login" element={ <Login/> } />
      <Route path="dashboard" element={ <Dashboard/> } />
    </Routes>
  </div>
  );
}

export default App;
