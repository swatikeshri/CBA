import React from "react";
import "./UserForm.css";

export class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.onDispatch(this.state.amount);
  }
  render() {
    return (
      <div>
        <div className="formField">
          <label title="Amount">Enter amount</label>
          <input
            value={this.state.amount}
            onChange={evt => {
              this.setState({
                amount: evt.target.value
              });
            }}
            type="text"
          />
        </div>
        <div className="formField">
          <input type="Submit" value="Submit" onClick={this.onSubmit} />
        </div>
      </div>
    );
  }
}
