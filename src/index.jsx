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
  render() {
    const { secondsElapsed, reset } = this.props.store
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
    const { tick } = this.props.store
    this.interval = setInterval(tick, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  static propTypes = {
    store: PropTypes.shape({
      secondsElapsed: PropTypes.number.isRequired,
      tick: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired
    }).isRequired
  }
};

const timerStore = new TimerStore()

render(<Timer store={timerStore} />, document.getElementById('root'));
