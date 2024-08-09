import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import './App.css'
import Atar from "./pages/atar";
import Others from "./pages/others";
import Food from "./pages/food";
import Clothing from "./pages/clothings";
import InsertProduct from "./pages/insertProduct";
import DeleteProduct from "./pages/deleteproduct";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/atar" element={<Atar/>}></Route>
          <Route path="/others" element={<Others/>}></Route>
          <Route path="/food" element={<Food/>}></Route>
          <Route path="/clothing" element={<Clothing/>}></Route>
          <Route path="/insertproduct" element={<InsertProduct/>}></Route>
          <Route path="/deleteproduct" element={<DeleteProduct/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
