import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products/:category" element={<ProductCategory />} />
      <Route path="products/:category/:name" element={<ProductDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
