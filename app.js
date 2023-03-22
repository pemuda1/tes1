app.js
const inputText = document.getElementById("input-text");
const audio = document.getElementById("audio");

function speak() {
  const utterance = new SpeechSynthesisUtterance(inputText.value);
  speechSynthesis.speak(utterance);
  utterance.onend = function() {
    const blob = new Blob([new Uint8Array(audio.src.split(",")[1].split("").map((char) => char.charCodeAt()))], {type: 'audio/wav'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "speech.wav";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
