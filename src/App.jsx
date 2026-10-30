import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
const [quantity, setQuantity] = useState(0);
const [selectedColor, setSelectedColor] = useState("Black");
const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
const [showProduct, setShowProduct] = useState(true);

const product = {
name: "Wireless Mouse",
price: 499
};

return ( <div className="app"> <Header />


  <button
    className="toggle-button"
    onClick={() => setShowProduct(!showProduct)}
  >
    {showProduct ? "Hide Product" : "Show Product"}
  </button>

  {showProduct && (
    <ProductCard
      name={product.name}
      price={product.price}
      quantity={quantity}
      setQuantity={setQuantity}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
      deliveryCity={deliveryCity}
      setDeliveryCity={setDeliveryCity}
    />
  )}

  <Footer />
</div>

);
}

export default App;
