import {Observable} from 'rxjs';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const observable = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(async () => {
        observer.next(4);
        await sleep(1000);
    }, 5000)
    //observer.complete(); // will not emit any values as completed

    return () => {
        console.log('Cleanup function called');
      };
});

observable.subscribe({
    next: v => console.log("value : ", v),
    error: err => console.log("err : ",err),
    complete: () => console.log('complete observer')
});