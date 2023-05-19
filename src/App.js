import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import BookmarkPage from "./pages/BookmarkPage";
import { Routes, Route } from "react-router-dom";

function App() {
  // API 불러오기
  // const getProductList = async () => {
  //   try {
  //     let url = `http://cozshopping.codestates-seb.link/api/v1/products`;
  //     setIsLoading(true);
  //     let response = await fetch(url);
  //     let data = await response.json();

  //     setProducts(data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setAPIError(err.message);
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getProductList();
  // }, []);
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
