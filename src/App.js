/* eslint-disable react/prefer-stateless-function */
import { Route, Routes } from 'react-router-dom';
import Calculator from './component/Calculator';
import './App.css';
import Quote from './component/pages/Quote';
import Home from './component/pages/Home';
import Navbar from './component/pages/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}
