let value = document.getElementById("value");

let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

function generator() {
  //length
  // 20 meters = 65.616 feet | 20 feet = 6.096 meters

  let meterstToFeet = value.innerText * 3.281;
  let feetToMeters = value.innerText / 3.282;
  feetToMeters = feetToMeters.toFixed(3);
  meterstToFeet = meterstToFeet.toFixed(3);

  length.innerText =
    value.innerText +
    " meters = " +
    meterstToFeet +
    " feet" +
    " | " +
    value.innerText +
    " feet = " +
    feetToMeters +
    " meters";

  //volume
  //20 meters = 65.616 feet | 20 feet = 6.096 meters / 0.264172

  let litersToGallons = value.innerText / 0.264172;
  let gallonstoLiters = value.innerText * 0.264172;

  litersToGallons = litersToGallons.toFixed(3);
  gallonstoLiters = gallonstoLiters.toFixed(3);

  volume.innerText =
    value.innerText +
    " liters = " +
    litersToGallons +
    " gallons" +
    " | " +
    value.innerText +
    " gallons = " +
    gallonstoLiters +
    " liters";

  //mass
  //20 meters = 65.616 feet | 20 feet = 6.096 meters / 2.205

  let kilogramsToPounds = value.innerText / 2.205;
  let poundsToKilograms = value.innerText * 2.205;
  kilogramsToPounds = kilogramsToPounds.toFixed(3);
  poundsToKilograms = poundsToKilograms.toFixed(3);

  mass.innerText =
    value.innerText +
    " kilograms = " +
    kilogramsToPounds +
    " pounds" +
    " | " +
    value.innerText +
    " pounds = " +
    poundsToKilograms +
    " kilograms";
}

generator();
