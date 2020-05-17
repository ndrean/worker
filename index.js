import { longRun } from "./calc.js";
import { checkInput } from "./checkForms.js";
// import { printPrime } from "./primeWorker.js";

// Computation in the main thread => freezes
document.querySelector("#calcFreeze").addEventListener("click", () => {
  console.log("freezed!");
  longRun();
});
document;

// Computation with a worker
const worker = new Worker("calcWithWorker.js");

// start the worker, and sending him messages, for example a JSON
const runWorker = () => {
  worker.postMessage({ cmd: "start", msg: "Starting..." });
  document.getElementById("span2").textContent =
    "No freeze, can display this! Try the input...";
};
document.querySelector("#stopworker").addEventListener("click", () => {
  worker.terminate();
});

document.querySelector("#calcworker").addEventListener("click", () => {
  runWorker();
  worker.addEventListener("message", (e) => {
    document.getElementById("workerRun").textContent = e.data;
  });
  // worker.onmessage is a shortcut
});

// show freezed or not with the input focusable or not
checkInput("#form1", "#span1", "#input1");
checkInput("#form2", "#span2", "#input2");

const blobCode = new Blob(
  [
    `onmessage = function(e) \{
        function isPrime(value) \{
            const x = parseInt(value);
            for (let i = 2; i <= x; i++) \{
                if (value % i === 0) \{
                    return \{
                    first_div: i,
                    check: i === x ? true : false,
                    \};
                \}
            \}
        \}
        self.postMessage(isPrime(e.data));
    \};`,
  ],
  {
    type: "application/javascript",
  }
);
// we create a link to this code
const codeURL = URL.createObjectURL(blobCode);

// Creates and starts a background thread that runs the code pointed at by scriptURL of type 'string'

// const primeWorker = new Worker("primeWorker.js");
const primeWorker = new Worker(codeURL);

const primeForm = document.querySelector("#findPrime");
primeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const myData = new FormData(primeForm);
  const msg = myData.get("nb");
  //   const nb = prompt("Enter a number");
  primeWorker.postMessage(msg); // we send the string 'nb' to the worker
});

// Fires when the worker calls postMessage(). The message passed to postMessage is in event.data.
primeWorker.onmessage = function (e) {
  document.querySelector("#isPrime").textContent =
    "first divisor is " + e.data.first_div + " is prime ? :" + e.data.check;
};
