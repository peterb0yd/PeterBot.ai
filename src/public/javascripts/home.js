
if (window.Worker) {
  const myWorker = new Worker('js/workers/index.js');

  myWorker.postMessage('space travel');
  myWorker.postMessage('google my butt');
  myWorker.postMessage('test me red');

  myWorker.onmessage = function(e) {
    console.log(`Message received from worker: ${e.data}`);
  }
}
