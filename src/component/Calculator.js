/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-show">{ next || total }</div>
        <div className="calculator-container">
          <div className="input-keys">
            <div className="function-keys">
              <button onClick={this.handleClick} type="button" className="key">AC</button>
              <button onClick={this.handleClick} type="button" className="key">+/-</button>
              <button onClick={this.handleClick} type="button" className="key">%</button>
            </div>
            <div className="digit-keys">
              <button onClick={this.handleClick} type="button" className="key">7</button>
              <button onClick={this.handleClick} type="button" className="key">8</button>
              <button onClick={this.handleClick} type="button" className="key">9</button>
              <button onClick={this.handleClick} type="button" className="key">4</button>
              <button onClick={this.handleClick} type="button" className="key">5</button>
              <button onClick={this.handleClick} type="button" className="key">6</button>
              <button onClick={this.handleClick} type="button" className="key">1</button>
              <button onClick={this.handleClick} type="button" className="key">2</button>
              <button onClick={this.handleClick} type="button" className="key">3</button>
              <button onClick={this.handleClick} type="button" className="key key0">0</button>
              <button onClick={this.handleClick} type="button" className="key">.</button>
            </div>
          </div>
          <div className="operator-keys">
            <button onClick={this.handleClick} type="button" className="key orange-key">÷</button>
            <button onClick={this.handleClick} type="button" className="key orange-key">x</button>
            <button onClick={this.handleClick} type="button" className="key orange-key">-</button>
            <button onClick={this.handleClick} type="button" className="key orange-key">+</button>
            <button onClick={this.handleClick} type="button" className="key orange-key">=</button>
          </div>
        </div>
      </div>
    );
  }
}
