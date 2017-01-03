(function() {
  // Tarkastetaan, että selain tukee service workeriä
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.log(err, "ERROR")
    });
  } else {
    // Service worker is not supported
  }
})();
