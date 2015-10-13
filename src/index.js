import React from 'react';
import {observable} from 'mobservable';
import {observer} from 'mobservable-react';

// uncomment next line to enable the dev-tools.
// import 'mobservable-react-devtools';

var appState = observable({
    timer: 0
});

appState.resetTimer = function() {
    appState.timer = 0;
};

setInterval(function() {
    appState.timer += 1;
}, 1000);
        
var TimerView = observer(React.createClass({
     render: function() {
        return (<button onClick={this.onReset}>
        	Seconds passed: {this.props.appState.timer}
            </button>);
     },
     
     onReset: function() {
     	this.props.appState.resetTimer();
     }
}));

React.render(<TimerView appState={appState} />, document.body);