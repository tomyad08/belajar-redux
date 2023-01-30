import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelector,
  updateProduct,
} from "../features/productSlice";
import { useParams, useNavigate } from "react-router-dom";
const EditProduct = () => {
  const [title, setTitle] = useState(" ");
  const [price, setPrice] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => productSelector.selectById(state, id));
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  useEffect(() => {
    if (product) {
      setTitle(product.title.title);
      setPrice(product.title.price);
    }
  });
  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateProduct(id, title.title, title.price));
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
