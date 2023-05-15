import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import BookmarkPage from "./pages/BookmarkPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/list" element={<ProductListPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
