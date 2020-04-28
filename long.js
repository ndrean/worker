// self.addEventListener('message', callback) <=> self.onmessage = callback

self.onmessage = function (e) {
  console.log("received in the worker: ", e.data);

  const start = Date.now(); // milliseconds
  let x = 0;
  for (let i = 0; i < 8000000000; i++) {
    x = x + i;
  }
  const result = -(start - Date.now()) / 1000;
  postMessage(result);
};
