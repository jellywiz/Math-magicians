/* eslint-disable react/prefer-stateless-function */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './component/Calculator';
import './App.css';
import Quote from './component/pages/Quote';
import Home from './component/pages/Home';
import Navbar from './component/pages/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}
