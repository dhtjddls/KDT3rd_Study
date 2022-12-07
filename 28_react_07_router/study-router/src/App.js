// 라이브러리
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// 페이지
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
// 컴포넌트
import Header from "./components/Header";
// 스타일 시트
import "./styles/Common.scss";

function App() {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setProducts(res.data.slice(0, 10));
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetailPage products={products} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
