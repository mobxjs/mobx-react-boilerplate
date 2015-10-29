import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobservable';
import {observer} from 'mobservable-react';

// uncomment next line to enable the dev-tools.
import 'mobservable-react-devtools';

const appState = observable({
    timer: 0
});

appState.resetTimer = function() {
    appState.timer = 0;
};

setInterval(() => {
    appState.timer += 1;
}, 1000);

@observer
class TimerView extends Component {
     render() {
        return (
            <button onClick={this.onReset}>
                Seconds passed: {this.props.appState.timer}
            </button>
        );
     }

     onReset = () => {
     	this.props.appState.resetTimer();
     }
};

ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
