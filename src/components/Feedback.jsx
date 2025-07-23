import React from "react";

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedbacl = () => {
    this.setState({ good: this.state.good + 1 });
  };

  neutralFeedbacl = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  badFeedbacl = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    return (
      <>
        <div>
          <h1>Please leave a feedback</h1>
          <button onClick={this.goodFeedbacl}>Good</button>
          <button onClick={this.neutralFeedbacl}>Neutral</button>
          <button onClick={this.badFeedbacl}>Bad</button>
        </div>
        <div>
          <h2>Statics</h2>
          {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0 ? (
            <div>
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
              <p>
                Total: {this.state.good + this.state.neutral + this.state.bad}
              </p>
              <p>
                Positive procent:
                {Math.round(
                  (this.state.good * 100) /
                    (this.state.good + this.state.neutral + this.state.bad)
                )}
                %
              </p>
            </div>
          ) : (
            <p>There is no feedback</p>
          )}
        </div>
      </>
    );
  }
}
