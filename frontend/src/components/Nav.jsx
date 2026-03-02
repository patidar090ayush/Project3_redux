import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // const user = useSelector((state) => state.userReducer.users);
  const user = useSelector((state) => state.user.users);
  console.log("Current user in Nav:", user);
  return (
    <nav className="mb-10 flex justify-center items-center gap-x-5 p-10 ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {/* <NavLink to="/register">Register</NavLink>{" "} */}
      {user ? (
        <>
           <NavLink to="/admin/Create-Product">Create Product</NavLink>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
};

export default Nav;
