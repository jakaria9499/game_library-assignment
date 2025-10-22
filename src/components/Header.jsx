import { NavLink } from "react-router";
import logoImg from "../assets/logo1.png";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-games">All Games</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <div className="dropdown sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <VscThreeBars size={25} />
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </div>
        </div>
        <a className="btn btn-ghost hover:bg-transparent hover:shadow-none hover:border-0 ">
          <img className="h-15" src={logoImg} alt="Logo Image" />
        </a>
      </div>
      <div className="flex ">
        <div className="gap-5 flex items-center mx-5 max-sm:hidden ">
          {links}
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
