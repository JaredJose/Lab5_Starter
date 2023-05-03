// expose.js
//import JSConfetti from 'js-confetti';
const jsConfetti  = new JSConfetti(); 
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horntype = document.getElementById("horn-select");
  var img = document.querySelector("#expose img");
  horntype.addEventListener("change", (event) => {
    switch(event.target.value){
      case "air-horn":
        console.log("switch to air horn");
        img.src = "assets/images/air-horn.svg";
        break;
      case "car-horn":
        console.log("switch to car horn");
        img.src = "assets/images/car-horn.svg";
        break;
      case "party-horn":
        console.log("switch to party horn");
        img.src = "assets/images/party-horn.svg";
        break;
      default:
        break;
    }
  });

  const aud = document.getElementsByClassName("hidden")[0];
  const soundButton = document.querySelector("button");
  soundButton.addEventListener("click", (event) => {
    const horn = document.getElementById("horn-select");
    switch(horn.value){
      case "air-horn":
        aud.src = "assets/audio/air-horn.mp3";
        console.log("playing air horn");
        break;
      case "car-horn":
        aud.src = "assets/audio/car-horn.mp3";
        console.log("playing car horn");
        break;
      case "party-horn":
        aud.src = "assets/audio/party-horn.mp3";
        jsConfetti.addConfetti();
        console.log("playing party horn");
        break;
    }
    aud.play();
  });

  const volSlider = document.getElementById("volume");
  const volIcon = document.getElementById("volume-controls").querySelector("#expose img");
  volSlider.addEventListener("change", (event) => {
    var vol = volSlider.value;
    aud.volume = vol * 1.0 / 100;
    console.log(aud.volume); 
    if(vol == 0){
      volIcon.src = "assets/icons/volume-level-0.svg";
    } else if (vol >= 1 && vol < 33){
      volIcon.src = "assets/icons/volume-level-1.svg";
    } else if(vol >= 33 && vol < 67){
      volIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volIcon.src = "assets/icons/volume-level-3.svg";
    }
  });
}