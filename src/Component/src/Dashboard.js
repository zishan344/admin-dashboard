import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { VscThreeBars } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary btn-outline drawer-button absolute top-0 right-3 lg:hidden"
        >
          <VscThreeBars />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 md:w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
              <li>
                <NavLink to="/sickertAdmin">Company Sickert</NavLink>
              </li>
              <li>
                <NavLink to="/Moderator">Moderator</NavLink>
              </li>
              <li>
                <NavLink to="/publicUser">Normal User</NavLink>
              </li>
              <li>
                <NavLink onClick={() => signOut(auth)} to="/login">
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
