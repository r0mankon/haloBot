export function textToSpeech(text) {
  if (!window.speechSynthesis) {
    return alert("SpeechSynthesis is not supported by your device/browser");
  }

  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.cancel(); // stop any previous utterance

  if (text.includes("Loading...")) return synth.cancel();

  synth.speak(utterance); // then make the current utterance
}
