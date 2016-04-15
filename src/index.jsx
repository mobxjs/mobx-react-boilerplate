import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class TimerStore {
  @observable secondsElapsed;

  constructor(secondsElapsed = 0) {
    this.secondsElapsed = secondsElapsed;
  }

  tick = () => {
    this.secondsElapsed += 1;
  }

  reset = () => {
    this.secondsElapsed = 0;
  }
}

@observer
class Timer extends Component {
  constructor(props) {
    super(props)
    this.store = new TimerStore(props.secondsElapsed)
  }

  render() {
    const { secondsElapsed, reset } = this.store
    return (
      <div>
        <button onClick={reset}>
          Seconds elapsed: {secondsElapsed}
        </button>
        <DevTools />
      </div>
    );
  }

  componentDidMount = () => {
    this.interval = setInterval(this.store.tick, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  static propTypes = {
    secondsElapsed: PropTypes.number
  }

  static defualtProps = {
    secondsElapsed: 0
  }
};

render(<Timer secondsElapsed={10} />, document.getElementById('root'));
