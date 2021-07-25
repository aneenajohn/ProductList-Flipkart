import "./styles.css";
import ProductList from "./productList/productList";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <h1>Flipkart</h1>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}
