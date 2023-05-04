// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = speechSynthesis.getVoices();

  console.log(speechSynthesis.getVoices().length);
  console.log("THE VOICES");
  console.log(voices.length);
  for(let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
  console.log("DONE WITH THE VOICES");
}

