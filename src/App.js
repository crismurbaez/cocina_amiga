import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Products from './pages/products/products';
import News from './pages/news/news';
import Contact from './pages/contact/contact';
import Users from './pages/users/users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
