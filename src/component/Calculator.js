/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-show">0</div>
        <div className="calculator-container">
          <div className="input-keys">
            <div className="function-keys">
              <button type="button" className="key">AC</button>
              <button type="button" className="key">+/-</button>
              <button type="button" className="key">%</button>
            </div>
            <div className="digit-keys">
              <button type="button" className="key">7</button>
              <button type="button" className="key">8</button>
              <button type="button" className="key">9</button>
              <button type="button" className="key">4</button>
              <button type="button" className="key">5</button>
              <button type="button" className="key">6</button>
              <button type="button" className="key">1</button>
              <button type="button" className="key">2</button>
              <button type="button" className="key">3</button>
              <button type="button" className="key key0">0</button>
              <button type="button" className="key">●</button>
            </div>
          </div>
          <div className="operator-keys">
            <button type="button" className="key orange-key">÷</button>
            <button type="button" className="key orange-key">×</button>
            <button type="button" className="key orange-key">−</button>
            <button type="button" className="key orange-key">+</button>
            <button type="button" className="key orange-key">=</button>
          </div>
        </div>
      </div>
    );
  }
}
