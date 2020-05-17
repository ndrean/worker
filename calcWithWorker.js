// self.addEventListener('message', callback) <=> self.onmessage = callback

self.addEventListener("message", (e) => {
  const sentMsg = e.data;
  console.log("received in the worker: ", sentMsg.cmd);
  self.postMessage(`${sentMsg.msg} to work!`);
});

self.addEventListener("message", () => {
  const start = Date.now(); // milliseconds
  let x = 0;
  for (let i = 0; i < 8000000000; i++) {
    x = x + i;
  }
  const result = (Date.now() - start) / 1000;
  console.log("Time needed :", result);
  self.postMessage(result);
});
