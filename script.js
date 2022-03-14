let value = document.getElementById("value");

let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

let inputValue = document.getElementById("tentacles");

function result() {
  console.log(inputValue.value);
}

function generator() {
  value = inputValue.value;
  //length
  // 20 meters = 65.616 feet | 20 feet = 6.096 meters

  let meterstToFeet = value * 3.281;
  let feetToMeters = value / 3.282;
  feetToMeters = feetToMeters.toFixed(3);
  meterstToFeet = meterstToFeet.toFixed(3);

  length.innerText =
    value +
    " meters = " +
    meterstToFeet +
    " feet" +
    " | " +
    value +
    " feet = " +
    feetToMeters +
    " meters";

  //volume
  //20 meters = 65.616 feet | 20 feet = 6.096 meters / 0.264172

  let litersToGallons = value / 0.264172;
  let gallonstoLiters = value * 0.264172;

  litersToGallons = litersToGallons.toFixed(3);
  gallonstoLiters = gallonstoLiters.toFixed(3);

  volume.innerText =
    value +
    " liters = " +
    litersToGallons +
    " gallons" +
    " | " +
    value +
    " gallons = " +
    gallonstoLiters +
    " liters";

  //mass
  //20 meters = 65.616 feet | 20 feet = 6.096 meters / 2.205

  let kilogramsToPounds = value / 2.205;
  let poundsToKilograms = value * 2.205;
  kilogramsToPounds = kilogramsToPounds.toFixed(3);
  poundsToKilograms = poundsToKilograms.toFixed(3);

  mass.innerText =
    value +
    " kilograms = " +
    kilogramsToPounds +
    " pounds" +
    " | " +
    value +
    " pounds = " +
    poundsToKilograms +
    " kilograms";
}

generator();
