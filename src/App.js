import { useState } from "react";
import "./App.css"

export default function App() {
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [TotalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState("");
  const [ProductList, setProductList] = useState([]);

  const handleSubmit = () => {
    const price = parseFloat(productPrice);

    if (isNaN(price) || price < 1) {
      setError(
        "The product Price field must be a valid number greter than or equal to 1"
      );
    } else {
      const newProduct = {
        name: productName,
        price: price
      };
      setProductList((prevProductlist) => [...prevProductlist, newProduct]);
      setTotalPrice((prevTotal) => prevTotal + price);

      setError("");
      setProductName("");
      setProductPrice("");
    }
  };
  return (
    <div className="App">
      <h1>Task </h1>

      <input
        type="text"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
        placeholder="Product Name"
      />
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => setProductPrice(e.target.value)}
        value={productPrice}
        placeholder="Product Price"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}

      <h3>Sell Price : </h3>
      <div>
        <ul>
          {ProductList.map((product, index) => (
            <li key={index}>
              {product.name}:{product.price}
            </li>
          ))}
        </ul>
        <h3>TotalPrice : {TotalPrice}</h3>
      </div>
    </div>
  );
}

