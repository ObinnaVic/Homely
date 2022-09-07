import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Products from './components/Products';
import Download from './components/Download';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Products />} />
          <Route path="Download" element={<Download />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
