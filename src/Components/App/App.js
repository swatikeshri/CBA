import React from "react";
import Header from "../Header/Header";
import { UserForm } from "../UserForm/UserForm";
import { Result } from "../Result/Result";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { amount: null };
    this.onDispath = this.onDispath.bind(this);
  }
  onDispath(amount) {
    this.setState({ amount });
    console.log("called");
  }
  render() {
    return (
      <div id="container">
        <h1>ATM Cash Dispenser</h1>
        <div id="leftContainer">
          <UserForm onDispatch={this.onDispath} />
        </div>
        <div id="rightContainer">
          <Result amount={this.state.amount} />
        </div>
      </div>
    );
  }
}

export default App;
