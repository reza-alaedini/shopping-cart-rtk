import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

function ProductDetails(props) {
  const params = useParams();
  const products = useSelector((state) => state.products);
  const singleProduct = products.products[params.id - 1];
  const { title, description, image, price, category } = singleProduct;

  return (
    <div className="h-screen w-full flex justify-center mt-5">
      <div className="bg-white h-fit w-full lg:w-2/4 m-3 lg:m-0 rounded-md shadow-lg flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around items-center p-5">
        <img src={image} className="w-3/5 sm:w-2/5" />
        <div className="sm:self-start shadow-lg w-full sm:w-2/4 p-5">
          <p className="text-lg font-bold text-blue-500">{title}</p>
          <Disclosure>
            {({ open }) => (
              <div className="py-5 px-2.5 rounded-md shadow-md">
                <Disclosure.Button className="w-full flex justify-between items-center">
                  <h4 className="font-semibold">Extra Information</h4>
                  <IoIosArrowDown
                    size={20}
                    className={`${open && "transform rotate-180"}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 text-justify break-all mt-3">
                  {description}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
          <p className="font-semibold text-orange-500 mt-3">
            Category: <span className="text-black font-medium">{category}</span>
          </p>
          <div className="w-fit text-sm font-medium text-white bg-green-500 p-1 px-2 rounded-sm mt-2">
            {price}$
          </div>
          <Link to="/products">
            <button className="mt-5 w-full font-semibold text-white bg-blue-500 py-1.5 rounded transition-colors hover:bg-blue-600">
              Back to Store
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
