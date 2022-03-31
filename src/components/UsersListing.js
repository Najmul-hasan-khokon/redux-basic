import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../redux/actions/usersActions";
import classes from "../styles/row.module.css";

export default function UsersListing() {
  const users = useSelector((state) => state.allUsers.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {users === undefined && <div>Loading....</div>}

      <div className={classes.videos}>
        {users !== undefined &&
          users.map((user) => (
            <Link to={`/user/${user.id}`} key={user.id}>
              <div
                className="card"
                style={{ width: "18rem", background: "purple" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{user.userIdname}</h5>
                  <h1 className="card-subtitle">{user.email}</h1>
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
