import React, { Component } from 'react';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 10,
    neutral: 5,
    bad: 3,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positive
          // feedback={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
