/* eslint-disable react/prefer-stateless-function */
import { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator">
      <div className="calculator-show">{ state.next || state.total }</div>
      <div className="calculator-container">
        <div className="input-keys">
          <div className="function-keys">
            <button onClick={handleClick} type="button" className="key">AC</button>
            <button onClick={handleClick} type="button" className="key">+/-</button>
            <button onClick={handleClick} type="button" className="key">%</button>
          </div>
          <div className="digit-keys">
            <button onClick={handleClick} type="button" className="key">7</button>
            <button onClick={handleClick} type="button" className="key">8</button>
            <button onClick={handleClick} type="button" className="key">9</button>
            <button onClick={handleClick} type="button" className="key">4</button>
            <button onClick={handleClick} type="button" className="key">5</button>
            <button onClick={handleClick} type="button" className="key">6</button>
            <button onClick={handleClick} type="button" className="key">1</button>
            <button onClick={handleClick} type="button" className="key">2</button>
            <button onClick={handleClick} type="button" className="key">3</button>
            <button onClick={handleClick} type="button" className="key key0">0</button>
            <button onClick={handleClick} type="button" className="key">.</button>
          </div>
        </div>
        <div className="operator-keys">
          <button onClick={handleClick} type="button" className="key orange-key">÷</button>
          <button onClick={handleClick} type="button" className="key orange-key">x</button>
          <button onClick={handleClick} type="button" className="key orange-key">-</button>
          <button onClick={handleClick} type="button" className="key orange-key">+</button>
          <button onClick={handleClick} type="button" className="key orange-key">=</button>
        </div>
      </div>
    </div>
  );
}
