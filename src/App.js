import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ShowProduct from "./components/ShowProduct";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
