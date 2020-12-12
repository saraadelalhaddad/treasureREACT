import React from "react";

//navLink
import { NavLink } from "react-router-dom";

//observer
import { observer } from "mobx-react";

//store
import authStore from "../stores/authStore";

//signout icon
import { AiOutlineLogout } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <>
        <NavLink to="/" className="nav-link">
          Home <span className="sr-only"></span>
        </NavLink>
        {authStore.user ? (
          <>
            <p>Hello, {authStore.user.username}</p>
            <AiOutlineLogout
              size="2em"
              color="red"
              onClick={authStore.signout}
            />
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
      <div className="collapse navbar-collapse" id="navbarNavDropdown"></div>
    </nav>
  );
};
export default observer(NavBar);
