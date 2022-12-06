import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul className="navbar">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link className="link" to="quote">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
