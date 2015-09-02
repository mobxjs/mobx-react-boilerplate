import React from 'react';
import {makeReactive} from 'mobservable';
import {reactiveComponent} from 'mobservable-react';

// uncomment next line to enable the dev-tools.
// import 'mobservable-react-devtools';

var appState = makeReactive({
    timer: 0
});

appState.resetTimer = function() {
    appState.timer = 0;
};

setInterval(function() {
    appState.timer += 1;
}, 1000);
        
var TimerView = reactiveComponent(React.createClass({
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