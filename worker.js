onmessage = function (e) {
  console.log("received in the worker: ", e.data);
  postMessage("pong");
};
