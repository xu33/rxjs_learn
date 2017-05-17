/*
cold observable不会运行直到被订阅，
例如，只有当subscribe被调用时，这个observable sequence才开始向observers推送数据(push values to the observers)
和hot observable不同之处在于，例如mousemove事件或者股票实时行情，没订阅之前它们已经在产生数据了(even before a subscription is active)
当一个observer订阅了一个hot observable seuqence时，它只会获取到发生在订阅行为之后，该stream所发射的值。(it will get all values in 
the stream that are emitted after it subscribes)

hot observable sequence被所有订阅者共享，每一个订阅者都能接收到下一个被sequence推送过来的值(each subscriber is pushed the next value in the sequence)

例如，即使没有人去订阅某支股票行情，行情也会连续不断的基于市场变化更新自身的值.

一旦某个订阅者订阅了它，那么他马上会收到下一次发射的值。

下面的代码展示了一个cold Observable
 */

var { Observable } = require('rx');
var source = Observable.interval(1000);

// var subscription1 = source.subscribe(x =>

//   console.log(`Observer 1: onNext: ${x}`)

// );

// var subscription2 = source.subscribe(x =>

//   console.log(`Observer 2 : onNext: ${x}`)

// );

// setTimeout(() => {

//   subscription1.dispose();

//   subscription2.dispose();

// }, 5000);

/*

使用publish操作符，将cold转换为hot

 */

// publish operator returns a ConnectableObservable instance
var hot = source.publish();

var subscription1 = hot.subscribe(x => console.log(`Observer 1: onNext: ${x}`));

console.log('Current Time after 1st subscription: ' + Date.now());

// idle for 3 secnods
setTimeout(function() {
  // Hot is connected to source and starts pushing value to subscribers
  hot.connect();

  console.log('Current Time after connect: ' + Date.now());

  // idle for another 3 seconds
  setTimeout(function() {
    console.log('Current Time after 2nd subscription: ' + Date.now());

    var subscription2 = hot.subscribe(x =>
      console.log(`Observer 2: onNext: ${x}`)
    );
  }, 5000);
}, 3000);
