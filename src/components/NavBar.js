import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import React from "react";
import authStore from "../stores/authStore";
// import { FiLogOut } from "react-icons/fi";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <>
        {authStore.user ? (
          <>
            <p>Hello, {authStore.user.username}</p>
            {/* <FiLogOut onClick={authStore.signout} size="2em" color="red" /> */}
          </>
        ) : (
          <>
            <NavLink to="/signin" className="nav-link">
              Sign In <span className="sr-only"></span>
            </NavLink>

            <NavLink to="/signup" className="nav-link">
              Sign Up <span className="sr-only"></span>
            </NavLink>
          </>
        )}
      </>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink to="/things" className="nav-link">
              Random Things <span className="sr-only"></span>
            </NavLink>
            <NavLink to="/treasure" className="nav-link">
              Treasure ! <span className="sr-only"></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default observer(NavBar);
