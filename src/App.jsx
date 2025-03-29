import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Product from './pages/product';
import ListingProduct from './components/productListing';
import AboutUs from './pages/about';
import ScrollToTop from './components/scrollTop';
import ServicesPage from './pages/services';
import Layout from './components/layout';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/products' element={<Product />} />
          <Route path='/products/:productName' element={<ListingProduct />} />
          <Route path='/services' element={<ServicesPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
