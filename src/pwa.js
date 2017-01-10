(function() {
  // Tarkastetaan, että selain tukee service workeriä
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(function(err) {
      console.log(err, "ERROR")
    });
  } else {
    console.log("Serviceworker is not supported, keep going!");
  }
})();
