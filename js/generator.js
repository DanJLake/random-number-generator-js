function numRange() {
  if (document.getElementById("number-range-selector").checked === true) {
    document.getElementById("number-range-options").disabled = false;
  } else {
    document.getElementById("number-range-options").disabled = true;
  }
}

function decimalAllowed() {
  if (document.getElementById("allow-decimals-selector").checked === true) {
    document.getElementById("allow-decimals-options").disabled = false;
  } else {
    document.getElementById("allow-decimals-options").disabled = true;
  }
}

function generateNumber() {
  const numStore = document.getElementById("number-store");
  let errorCount = 0;

  let max = 100;
  let min = 0;

  let decimalPlaces = 0;

  document.getElementById("number-range-error-display").innerHTML = "";
  document.getElementById("decimal-places-error-display").innerHTML = "";

  if (document.getElementById("number-range-selector").checked === true) {
  } else {
  }

  //Check if Number Range is enabled
  if (document.getElementById("number-range-selector").checked === true) {
    //Check value is present in low number range field
    if (
      document.getElementById("number-range-lowest-input").value.length !== 0 &&
      Number.isNaN(
        document.getElementById("number-range-lowest-input").value
      ) == false
    ) {
      min = document.getElementById("number-range-lowest-input").valueAsNumber;
    } else {
      errorCount++;
      document.getElementById("number-range-error-display").innerHTML +=
        "Invalid value entered for the lower range number!<br>";
    }
    //Check value is present in high number range field
    if (
      document.getElementById("number-range-highest-input").value.length !==
        0 &&
      Number.isNaN(
        document.getElementById("number-range-highest-input").value
      ) == false
    ) {
      max = document.getElementById("number-range-highest-input").valueAsNumber;
    } else {
      errorCount++;
      document.getElementById("number-range-error-display").innerHTML +=
        "Invalid value entered for the higher range number!<br>";
    }
  }

  if (document.getElementById("allow-decimals-selector").checked === true) {
    if (
      document.getElementById("decimal-places-input").value.length !== 0 &&
      Number.isNaN(document.getElementById("decimal-places-input").value) ==
        false
    ) {
      decimalPlaces = document.getElementById("decimal-places-input")
        .valueAsNumber;
    } else {
      errorCount++;
      document.getElementById("decimal-places-error-display").innerHTML +=
        "Invalid value entered for number of decimal places!<br>";
    }
  }

  if (errorCount === 0) {
    if (document.getElementById("allow-decimals-selector").checked === false) {
      let randomNumber = Math.floor(Math.random() * (max - min) + min);
      let numberchance = Math.random();

      if (numberchance >= 0.5) {
        randomNumber++;
      }
      document.getElementById("number-store").innerHTML = randomNumber;
    } else {
      let randomNumber = Math.random() * (max - min + 1) + min;
      trimmedNumber = parseFloat(randomNumber).toFixed(decimalPlaces);
      document.getElementById("number-store").innerHTML = trimmedNumber;
    }
  }
}

function generatePin() {
  const numStore = document.getElementById("number-store");
  let max = 1000;
  let min = 9999;

  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  let numberchance = Math.random();

  if (numberchance >= 0.5) {
    randomNumber++;
  }

  document.getElementById("number-store").innerHTML = randomNumber;
}

function predefinedValues() {
  document.getElementById("decimal-places-input").value = 2;
  document.getElementById("number-range-highest-input").value = 100;
  document.getElementById("number-range-lowest-input").value = 1;
}
