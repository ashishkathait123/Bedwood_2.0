import Home from "./pages/Home";
import CartDrawer from "./components/cart/CartDrawer";
import Page from "./components/catalog/page"
import {
  
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ProductListing from "./components/cart/ProductListing";
import ProductDetails from "./components/productDetails/ProductDetails";
import { ProductProvider } from "./components/productDetails/ProductContext";
import SearchResults from "./pages/header/SearchResults";
import PrivacyPolicy from "./pages/Privacy";
import UpdatePicksSection from './pages/top-picks/Top-picks.jsx';
import AboutUs from "./pages/about/AboutUs";
import Licensing from "./pages/licensing/Liensing";
import ProductServices from "./pages/product-services/Services";
import ProductListing2 from "./components/cart/ProductListing2";
function App() {
  return (
    <ProductProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/licensing" element={<Licensing />} />
        <Route path="/services" element={<ProductServices />} />
        <Route path="/cart" element={<CartDrawer />} />
        <Route path="/products/:category/:subcategory?" element={<ProductListing />} />
        <Route path="/catalogs" element={<Page/>} />  
        <Route path="/" element={<UpdatePicksSection />} />

        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/products" element={<ProductListing/>} />
        <Route path="/products/:category" element={<ProductListing />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/search" element={<SearchResults />} />     
           </Routes>
      
    </Router>
    
    </ProductProvider>
    
  );
}

export default App;
