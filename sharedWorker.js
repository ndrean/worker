onconnect = function (event) {
  const port = event.ports[0];

  port.onmessage = function (event) {
    port.postMessage("pong");
  };
};
