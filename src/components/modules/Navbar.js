import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useSelector((store) => store.cart);
  return (
    <nav className="shadow-md flex items-center justify-around p-5 z-50">
      <h2 className="font-bold text-2xl text-blue-500">
        <Link to="/products">Store</Link>
      </h2>
      <Link to="/cart">
        <div className="relative pt-3 hover:bg-gray-300 transition-colors cursor-pointer rounded-full p-2">
          <FaShoppingCart size={30} />
          <span className="flex justify-center items-center absolute -top-1 -right-2 bg-orange-500 text-white rounded-full p-1 text-sm font-semibold w-6 h-6">
            {cart.itemsCounter}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
