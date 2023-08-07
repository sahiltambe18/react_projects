import {Routes , BrowserRouter as Router, Route  } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import ProductItem from './ProductItem';

function App() {  
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/product' element={<Products/>}/> 
        <Route path='/products/:prid' element={<ProductItem/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
