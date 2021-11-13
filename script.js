let textarea = document.getElementById('test-target'),
consoleLog = document.getElementById('console-log'),
btnReset = document.getElementById('btn-reset');

function logMessage(message) {
  consoleLog.innerHTML += message + ";<br>";
}

textarea.addEventListener('keydown', (e) => {
  if (!e.repeat)
    logMessage(`Key "${e.key}" has been pressed  [event: keydown]`);
  else
    logMessage(`Key "${e.key}" repeating  [event: keydown]`);
});
textarea.addEventListener('input', (e) => {
  logMessage(`Key "${e.data}" input  [event: input]`);
});

btnReset.addEventListener('click', (e) => {
  let child = consoleLog.firstChild;
  while (child) {
   consoleLog.removeChild(child);
   child = consoleLog.firstChild;
  }
  textarea.value = ''
});
