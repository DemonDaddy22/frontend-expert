export const sampleUsage = `Promise.myRace([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.resolve(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));

Promise.myRace([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.reject(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));

Promise.myAny([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.resolve(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log);

Promise.myAny([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.reject(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));

Promise.myAll([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.resolve(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log);

Promise.myAll([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.reject(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));

Promise.myAllSettled([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.resolve(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log);

Promise.myAllSettled([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.reject(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));`;

export const solutionCode = `Promise.myRace = function (promises = []) {
  return new Promise((res, rej) => {
    for (const promise of promises) {
      promise.then(res).catch(rej);
    }
  });
};

Promise.myAny = function (promises = []) {
  return new Promise ((res, rej) => {
    let errorCount = 0;
    for (const promise of promises) {
      promise
        .then(res)
        .catch(() => {
          errorCount++;
          if (errorCount === promises.length) {
            rej('all promises rejected');
          }
        });
    }
  });
};

Promise.myAll = function (promises = []) {
  const response = new Array(promises.length);
  let successCount = 0;
  return new Promise ((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise
        .then((data) => {
          successCount++;
          response[i] = data;
          if (successCount === promises.length) {
            res(response);
          }
        })
        .catch(rej)
    }
  });
};

Promise.myAllSettled = function (promises = []) {
  const response = new Array(promises.length);
  let settledCount = 0;
  return new Promise ((res) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise
        .then((value) => {
          settledCount++;
          response[i] = { value, status: 'fulfilled' };
        })
        .catch((error) => {
          settledCount++;
          response[i] = { error, status: 'rejected' };
        })
        .finally(() => {
          if (settledCount === promises.length) {
            res(response);
          }
        })
    }
  });
};`;
