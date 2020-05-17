Testing web workers and blobs and File

## Live at:

<https://ndrean.github.io/worker/>

## Web work in short

To run a _Worker_, we declare it and reference the name of a _.js_ file that contains the code the
_Worker_ will run. Then _main_ thread communicates with the _Worker_ by emmitting messages with
the `postMessage` method, and listens to messages from the worker with event `onmessage` (a shortcut for
`worker.addEventListener('message', callback)` method) and `e.data`. The worker pushes messages to the main thread with the same `postMessage`.

## Testing of parallel computation

The same computation intensive job done directly in a script freezes the browser while the same code run in a web worker didn't freeze the browser. We can still run other code.

## Todo : more example with file uplaoding

<https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/>
