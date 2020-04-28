self.onmessage = function (e) {
  console.log("received in the worker: ", e.data);
  const response = e.data.toUpperCase();
  postMessage("Answer from the worker: " + response);
};
