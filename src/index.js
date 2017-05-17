import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// import { Observable } from 'rx';

// var source = Observable.timer(5000, 1000).timestamp();

// var subscription = source.subscribe(x => {
//   console.log(x.value + ': ' + x.timestamp);

//   if (x.value == 5) {
//     subscription.dispose();
//   }
// });

// var button = document.querySelector('button');

/*
The scan operator works just like reduce for arrays. It takes a value which is exposed to a callback. 
The returned value of the callback will then become the next value exposed the next time the callback runs.
 */
// var stream = Observable.fromEvent(button, 'click').scan(count => count + 1, 0);

// var subscription = stream.subscribe(count => console.log(count));

// import './observableTest';
import './ConvertArrayToObservable';
