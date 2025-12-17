import { Link, NavLink, useNavigate } from "react-router";
import logoImg from "../assets/logo1.png";
import photoImg from "../assets/photo.jpeg";
import { VscThreeBars } from "react-icons/vsc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-games">All Games</NavLink>
    </>
  );
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <div className="dropdown sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <VscThreeBars size={25} />
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow *:my-2"
          >
            {links}
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-ghost hover:bg-transparent hover:shadow-none hover:border-0 "
        >
          <img className="h-15" src={logoImg} alt="Logo Image" />
        </Link>
      </div>
      <div className="flex ">
        <div className="gap-5 flex items-center mx-5 max-sm:hidden ">
          {links}
        </div>
        <div className={`dropdown dropdown-end ${user ? "" : "hidden"} `}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user && user.photoURL ? user.photoURL : photoImg}
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow text-lg"
          >
            <li>
              <Link to="/profile" className="text-base">
                Profile
              </Link>
            </li>
            <li>
              <a className="text-base">Settings</a>
            </li>
            <li>
              <a onClick={handleLogOut} className="text-base">
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className={`flex ${user ? "hidden" : ""}`}>
          <div className="px-3">
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link className="btn btn-primary " to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
