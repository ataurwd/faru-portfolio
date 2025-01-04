import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar md:px-20 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden mr-10"
          >
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
          <div className="relative">
            <Link to={"/"} className="font-semibold text-xl block md:hidden">
              <h1>FaRu</h1>
            </Link>
            <ul
              tabIndex={0}
              className={`z-50 menu menu-sm dropdown-content rounded-boxmt-3 w-52 p-2 shadow bg-white `}
            >
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="hover:text-gray-300">
                  My Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className="hover:text-gray-300">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-gray-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Link to={"/"} className="font-semibold text-xl hidden md:block">
          <h1>FaRu</h1>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 space-x-5 text-[17px] font-medium`}
        >
          <li>
            <NavLink to="/" className="hover:text-gray-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="hover:text-gray-300">
              My Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="hover:text-gray-300">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-300">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
