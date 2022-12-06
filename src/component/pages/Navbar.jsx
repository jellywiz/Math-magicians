import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
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
    </div>
  );
}

export default Navbar;
