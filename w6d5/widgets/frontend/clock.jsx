import React from 'react';
import Tabs from './tabs';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {clock: new Date()};
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);

  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {

    return (
        <div className="clock">
          <h1>Clock</h1>
          <div className="clock-box">
              <p>
                {this.state.clock.getHours()%12}:
                {this.state.clock.getMinutes()}:
                {this.state.clock.getSeconds()}
              </p>
          </div>
        </div>
        );
      }

      tick() {

        this.setState({clock: new Date()});
      }
    }

    export default Clock;
