window.helper = (function() {

  function handleElapsedTime(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if(runningSince) {
      totalElapsed += Date.now() - runningSince;
    }

    return convertMillisecondsToReadable(totalElapsed)
  }

  function convertMillisecondsToReadable(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds/ 1000 / 60) % 60);
    const hours = Math.floor((milliseconds/ 1000 / 60 / 60));

    const result = [pad(hours.toString(), 2), pad(minutes.toString(), 2), pad(seconds.toString(), 2)].join(':')

    return result;
  }

  function pad(numberString, size) {
    let padded = numberString;
    while(padded.length < size) {
      padded = `0${padded}`;
    }
    return padded;
  }

  return {
    handleElapsedTime
  }
})();
