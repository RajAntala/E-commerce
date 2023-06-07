import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Home from './container/Home';
import Footer from './component/Footer';
import Cart from './container/Cart';
import Shop from './container/Shop';
import Checkout from './container/Checkout';
import Contect from './container/Contect';
import Addproduct from './container/Addproduct';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout/:id' element={<Checkout />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/contect' element={<Contect />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
