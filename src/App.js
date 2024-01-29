import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";

// Layout
import Store from "./components/layout/Store";

// components
import Navbar from "./components/modules/Navbar";
import Cart from "./components/templates/Cart";
import ProductDetails from "./components/templates/ProductDetails";

function App() {
  return (
    <div className="bg-[#f6f7f69f] h-full w-full">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
