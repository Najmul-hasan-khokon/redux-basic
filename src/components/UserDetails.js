import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser, removeUser } from "../redux/actions/usersActions";

export default function UserDetails() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // const fetchProduct = useCallback(async () => {
  //   const response = await axios
  //     .get(`https://jsonplaceholder.typicode.com/users/${productId}`)
  //     .catch((err) => console.log(err));

  //   dispatch(selectedProduct(response.data));
  // }, [dispatch, productId]);

  useEffect(() => {
    dispatch(fetchUser(userId));
    // cleanUp
    return () => {
      dispatch(removeUser());
    };
  }, [userId, dispatch]);

  return (
    <div>
      {user === undefined && <div>Loading....</div>}

      <div className="card w-25 bg-primary">
        {user !== undefined && (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.phone}</h1>
            <h1>{user.website}</h1>
            <h1>{user.address.city}</h1>
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
