import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increase,
  decrease,
  addItem,
  removeItem,
} from "../features/cart/cartSlice";

// utils
import { quantityCount, shorten, isInCart } from "../utils/functions";

// icon
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";


function Card({ product }) {
  // console.log(product);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="bg-white mx-auto p-4 m-5 rounded-lg shadow-lg w-80 flex flex-col">
      <img
        src={product.image}
        className="w-3/4 h-72 object-contain self-center"
      />
      <h3 className="text-lg font-bold text-blue-500 mt-5">
        {shorten(product.title)}
      </h3>
      <div className="w-full">
        <span className="inline-block text-sm text-white bg-green-500 my-3 py-1 px-2 rounded-sm text-left">
          {product.price}$
        </span>
      </div>
      <div className="w-full flex justify-between">
        <Link
          className="font-medium text-blue-500"
          to={`/products/${product.id}`}
        >
          Details
        </Link>
        <div className="flex items-center">
          {quantityCount(cart, product.id) === 1 && (
            <button onClick={() => dispatch(removeItem(product))} className="bg-blue-500 p-2 rounded-full">
              <FaRegTrashAlt color="white" />
            </button>
          )}
          {quantityCount(cart, product.id) > 1 && (
            <button onClick={() => dispatch(decrease(product))} className="bg-blue-500 p-2 rounded-full">
              <FaMinus color="white" />
            </button>
          )}
          {quantityCount(cart, product.id) > 0 && (
            <span className="w-7 h-7 flex justify-center items-center mx-2 font-semibold text-white bg-orange-500 rounded-full">{quantityCount(cart, product.id)}</span>
          )}
          {isInCart(cart, product.id) ? (
            <button onClick={() => dispatch(increase(product))} className="bg-blue-500 p-2 rounded-full">
              <FaPlus color="white" />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addItem(product))}
              className="text-sm font-semibold text-white bg-blue-500 py-1.5 px-3 rounded transition-colors hover:bg-blue-600"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
