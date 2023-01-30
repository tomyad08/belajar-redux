import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [title, setTitle] = useState(" ");
  const [price, setPrice] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    await dispatch(saveProduct({ title, price }));
    navigate("/");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={createProduct}>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
