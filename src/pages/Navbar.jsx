import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {user,logOutUser}= useAuth();
  const navLinks = 
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTests">All Tests</NavLink>
      </li>
     
      {
        user?
         <li>
          <NavLink to='/dashboard'>Dashboard</NavLink>
         </li>  :
        <li>
          <NavLink to='/register'> Register </NavLink>
        </li>
      }
     
    </>

    const handleLogOut =()=>{
      logOutUser()
      .then(result=>console.log(result?.user))
      .catch(error=>console.error(error))
    }
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Radiant Lab
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
       {
        user?
        <button onClick={handleLogOut} className="btn">Log Out</button>:
        <Link to="/login" className="btn">
        Log In
      </Link>
       }
      </div>
    </div>
  );
};

export default Navbar;
