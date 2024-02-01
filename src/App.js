import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
