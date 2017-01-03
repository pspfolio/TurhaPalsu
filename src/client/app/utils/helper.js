window.helper = (function() {

  function handleElapsedTime(elapsed, runningSince) {
    const totalElapsed = getTotalElapsed(elapsed, runningSince);
    return convertMillisecondsToReadable(totalElapsed)
  }

  function countSpendedMoney(elapsed, runningSince, salaryPerHour) {
    const totalElapsed = getTotalElapsed(elapsed, runningSince);
    const seconds = getRunnedBySeconds(totalElapsed);
    const salaryPerSecond = salaryPerHour / 60 / 60;
    return (seconds * salaryPerSecond).toFixed(2);
  }

  function getTotalElapsed(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if(runningSince) {
      totalElapsed += Date.now() - runningSince;
    }

    return totalElapsed;
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

  function getRunnedBySeconds(elapsed) {
    const seconds = parseInt(elapsed / 1000);
    return seconds;
  }

  return {
    handleElapsedTime,
    countSpendedMoney
  }
})();
