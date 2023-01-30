import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  productSelector,
  deleteProduct,
} from "../features/productSlice";
import { Link } from "react-router-dom";
const ShowProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <Link
        to="/add"
        className="border border-1 rounded bg-success p-3"
        style={{ textDecoration: "none", color: "white", margin: "auto" }}
      >
        Add New
      </Link>
      <table
        className="border border-2 p-2 text-center"
        style={{ width: "50%", margin: "auto" }}
      >
        <thead>
          <tr className="border border-2 p-2">
            <th className="border border-2 p-2">No</th>
            <th className="border border-2 p-2">Title</th>
            <th className="border border-2 p-2">Price</th>
            <th className="border border-2 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((prod, index) => (
            <tr key={prod.id} className="border border-1">
              <td className="border border-2 p-2">{index + 1}</td>
              <td className="border border-2 p-2">{prod.title.title}</td>
              <td className="border border-2 p-2">{prod.title.price}</td>
              <td className="border border-2 p-2">
                <Link
                  to={`edit/${prod.id}`}
                  className="btn btn-primary p-1 float-start"
                  style={{ width: "45%" }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(deleteProduct(prod.id))}
                  className="btn btn-danger p-1 float-end"
                  style={{ width: "45%" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ShowProduct;
