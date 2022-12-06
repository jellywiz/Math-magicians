/* eslint-disable react/prefer-stateless-function */
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './component/Calculator';
import './App.css';
import Quote from './component/Quote';
import Home from './component/Home';

export default function App() {
  return (
    <div className="App">
      <nav>
        <h1>Math Magicians</h1>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="calculator">Calculator</Link>
          </li>
          <li>
            <Link to="quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}
