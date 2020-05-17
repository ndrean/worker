const compute = async () => {
  const start = Date.now(); // milliseconds
  let x = 0;
  for (let i = 0; i < 8000000000; i++) {
    x = x + i;
  }
  return (Date.now() - start) / 1000;
};

const longRun = async () => {
  return await compute().then((res) => {
    console.log("result :", res);
    document.getElementById("longRun").textContent = "Computation time :" + res;
  });
};

export { compute, longRun };
