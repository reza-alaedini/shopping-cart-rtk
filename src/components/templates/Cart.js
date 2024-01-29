import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { quantityCount } from "../utils/functions";
import Card from "../elements/Card";

// actions
import { checkout, clear } from "../features/cart/cartSlice";

//icons
import { RiShoppingCart2Line } from "react-icons/ri";

function Cart() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center h-screen w-full mt-5 flex-wrap">
      {+cart.itemsCounter >= 1 ? (
        <div className="bg-white rounded-md shadow-lg overflow-y-auto flex flex-wrap items-start justify-center h-3/4 w-full md:w-2/4 mx-3 md:mx-0">
          {cart.selectedItems.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="p-5 bg-white rounded-md shadow-lg overflow-y-auto h-3/4 w-full lg:w-2/5 m-3 lg:m-0 flex flex-col justify-center items-center">
          <RiShoppingCart2Line color="blue" size={150} />

          <p className="font-bold mt-5">Your Cart is Currently Empty!</p>
          <Link to="/products">
            <button className="w-full font-semibold text-white bg-blue-500 p-2 rounded mt-5">
              Back to Store
            </button>
          </Link>
        </div>
      )}

      <div className="h-fit mx-3 bg-white rounded-md shadow-lg w-full lg:w-1/5 p-4">
        <div className="font-semibold text-blue-500">
          Total Products:{" "}
          <span className="text-black">{cart.itemsCounter}</span>
        </div>{" "}
        <div className="font-semibold text-blue-500">
          Total Price: <span className="text-black">{cart.totalPrice} $</span>
        </div>{" "}
        <div className="flex justify-between items-center m-3">
          <button
            onClick={() => dispatch(clear())}
            className="font-semibold rounded w-full mx-2 px-3 py-1 cart-button bg-green-500 hover:bg-green-600 text-white"
          >
            Clear All
          </button>
          <button
            onClick={() => dispatch(checkout())}
            className="font-semibold rounded w-full mx-2 px-3 py-1 cart-button bg-blue-500 hover:bg-blue-600 text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
