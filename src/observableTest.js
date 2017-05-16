import { Observable } from 'rx';

// observable test
var observable = Observable.create(function(observer) {
  observer.next(1);
  observer.next(2);

  console.log(observer);

  setTimeout(() => {
    observer.next(3);
    observer.completed();
  }, 1000);
});

console.log('before subscribe');

observable.subscribe(
  x => console.log(`got value ${x}`), // onNext
  err => console.log('error', err), // onError
  () => console.log('done') // onComplete
);

console.log('just after subscribe');

// timer操作符
var source = Observable.timer(
  2000, // 第一次产生值在2秒后
  1000 // 随后产生值的周期
)
  .take(3)
  .timestamp(); //x -> {value:x, timestamp: xxx}

var subscription = source.subscribe(x => console.log(x));
