function ProductCard({
name,
price,
quantity,
setQuantity,
selectedColor,
setSelectedColor,
deliveryCity,
setDeliveryCity
}) {
return ( <div className="product-card"> <h2>{name}</h2>


  <h3>Price: ₹{price}</h3>

  <label>Select Colour: </label>

  <select
    value={selectedColor}
    onChange={(e) => setSelectedColor(e.target.value)}
  >
    <option value="Black">Black</option>
    <option value="Blue">Blue</option>
    <option value="White">White</option>
  </select>

  <p>Selected Colour: {selectedColor}</p>

  <label>Delivery City: </label>

  <input
    type="text"
    value={deliveryCity}
    onChange={(e) => setDeliveryCity(e.target.value)}
    placeholder="Enter delivery city"
  />

  <p>Delivery to: {deliveryCity}</p>

  <h3>Quantity: {quantity}</h3>

  <button onClick={() => setQuantity(quantity + 1)}>
    Add to Cart
  </button>

  <button
    onClick={() => setQuantity(quantity - 1)}
    disabled={quantity === 0}
  >
    Remove One
  </button>

  <button onClick={() => setQuantity(0)}>
    Reset Cart
  </button>

  <h3>Total: ₹{quantity * price}</h3>

  <p className={quantity === 0 ? "empty" : "success"}>
    {quantity === 0
      ? "Cart is empty"
      : "Product added to cart"}
  </p>
</div>


);
}

export default ProductCard;
