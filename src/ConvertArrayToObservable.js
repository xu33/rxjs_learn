import { Observable } from 'rx';

var array = [1, 2, 3];

/* 
把数组转化为可观察序列(obsrevable sequence)
同理还可以将Set,Map,ArrayLikeObjects转化为observable sequence
也可以将generator转化为observable sequence
 */
var source = Observable.from(array);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => {},
  () => console.log(`onComplete`)
);
