import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Product from './pages/product';
import ListingProduct from './components/productListing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:productName' element={<ListingProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
