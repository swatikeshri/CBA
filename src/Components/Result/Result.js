import React from "react";

export class Result extends React.Component {
  constructor() {
    super();
    this.denominations = [1000, 500, 100, 50, 20, 10, 5, 1];
  }
  doMagic(amount) {
    const res = [];
    let count = 0;
    let reminder = amount;
    for (var i = 0; i < this.denominations.length; i++) {
      res[i] = Math.floor(reminder / this.denominations[i]);
      reminder = reminder % this.denominations[i];
      count += res[i];
    }
    let result = {};
    result.res = res;
    result.count = count;
    return result;
  }
  render() {
    const { amount } = this.props;
    console.log({ amount });
    const result = this.doMagic(amount);
    return (
      <div>
        <ul>
          {result.res.map((item, index) => (
            <li>
              {item} notes of {this.denominations[index]}
            </li>
          ))}
        </ul>
        <div>Total notes : {result.count}</div>
      </div>
    );
  }
}
