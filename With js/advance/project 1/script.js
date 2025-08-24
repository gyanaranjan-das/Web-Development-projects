const text = document.getElementById("textToConvert");
const converBtn = document.getElementById("convertBtn");

converBtn.addEventListener('click', function(){
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');

    if(!speechSynth.speaking && !enteredText.trim().length){
        error.textContent = 'Nothing to Convert! Enter Text in the area.'
    }

    if (!speechSynth.speaking && enteredText.trim().length){
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        converBtn.textContent = "Sound is Playing..."
    }

    setTimeout(() => {
        convertBtn.textContent = "Play Converted Sound"
    },5000);
});