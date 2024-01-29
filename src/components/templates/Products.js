import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { fetchProducts } from "../features/products/productSlice";

// element
import Card from "../elements/Card";

// loading gif
import Loading from "../gif/Loader.gif";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      className={`container w-full flex ${
        products.loading ? `justify-center` : `justify-between`
      } items-center flex-wrap mx-auto pt-8`}
    >
      {products.loading ? <img src={Loading} className="self-center" /> : null}
      {products.products.map((pro) => (
        <Card key={pro.id} product={pro} />
      ))}
    </div>
  );
}

export default Products;
