const names: Array<string> = [];
// names[0].split(' ');

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

promise.then((data) => {
  // data.split(' ');
});
