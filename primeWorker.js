// the worker will return an object
self.addEventListener("message", (e) => {
  function isPrime(value) {
    const x = parseInt(value);
    for (let i = 2; i <= x; i++) {
      if (value % i === 0) {
        return {
          first_div: i,
          check: i === x ? true : false,
        };
      }
    }
  }
  self.postMessage(isPrime(e.data));
});
