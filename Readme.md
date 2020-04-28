Testing web workers and blobs and File

##

To run a _Worker_, we declare it and reference the name of a _.js_ file that contains the code the
_Worker_ will run. Then _main_ communicates with the _Worker_ by emmitting messages with
the `postMessage` method, and listens to messages with `onmessage`, a shortcut for
`worker.addEventListener('message', callback)` method.

## Testing of parallel computation

The same computation job done directly in a script freezes the browser while the same code run in a web worker didn't freeze the browser. We can still run other code.

## Todo : more example with file uplaoding

<https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/>
