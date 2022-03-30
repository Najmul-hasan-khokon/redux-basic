import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productsActions";

export default function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  const fetchProduct = useCallback(async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${productId}`)
      .catch((err) => console.log(err));

    dispatch(selectedProduct(response.data));
  }, [dispatch, productId]);

  useEffect(() => {
    fetchProduct();
    // cleanUp
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, fetchProduct]);

  return (
    <div>
      <div className="card w-25 bg-primary">
        {product !== undefined && (
          <div>
            <h1>{product.name}</h1>
            <h1>{product.username}</h1>
            <h1>{product.phone}</h1>
            <h1>{product.website}</h1>
            <h1>{product.address.city}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

// {product !== undefined && (
//   <div className="card" style={{ width: "18rem" }}>
//     <img src={product.image} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title">{product.title}</h5>
//       <h1 className="card-subtitle">${product.price}</h1>
//       <p className="card-text">{product.description}</p>
//       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//     </div>
//   </div>
// )}
