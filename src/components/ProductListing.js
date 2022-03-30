import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../redux/actions/productsActions";
import classes from "../styles/row.module.css";

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();
  // https://fakestoreapi.com/products
  const fetchProducts = useCallback(async () => {
    const response = await axios
      .get(" https://jsonplaceholder.typicode.com/users")
      .catch((err) => console.log("server error", err));

    dispatch(setProducts(response.data));
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ei pattern eo kora jay

  // const renderList = products.map((product) => {
  //   const { id, image, title, price, description } = product;
  //   return (

  //   );
  // });

  return (
    <>
      <div className={classes.videos}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div
              className="card"
              style={{ width: "18rem", background: "purple" }}
            >
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h1 className="card-subtitle">{product.email}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

// {products.map((product) => (
//   <Link to={`/product/${product.id}`} key={product.id}>
//     <div className="card" style={{ width: "18rem" }}>
//       {/* <img src={product.image} className="card-img-top" alt="..." /> */}
//       <div className="card-body">
//         <h5 className="card-title">{product.title}</h5>
//         <h1 className="card-subtitle">${product.price}</h1>
//         <p className="card-text">{product.description}</p>
//         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//       </div>
//     </div>
//   </Link>
// ))}
