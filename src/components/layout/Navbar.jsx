import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const cartItems = useSelector(state => state.cart)
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-bold text-gray-100">
            EBT Market
          </span>
          <span className="text-xs text-gray-400">
            Smart Shopping Starts Here
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-indigo-400 font-medium"
                : "text-gray-300 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-400 font-medium"
                : "text-gray-300 hover:text-white transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? "text-indigo-400"
                  : "text-gray-300 hover:text-white"
              } transition`
            }
          >
            Cart
            {/* Cart Badge (static) */}
            {cartItems.length>0&&<span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs px-1.5 rounded-full">
              {cartItems.length}
            </span>}
          </NavLink>

          <Link to="/profile" className="btn btn-primary btn-sm">
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
