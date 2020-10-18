export function speechToText() {
  return new Promise(async (resolve, reject) => {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        return reject("Your browser doesn't support Speech Recognition!");
      }

      const recognition = new SpeechRecognition();
      recognition.start();

      recognition.onerror = error => reject(error);

      recognition.onresult = event => {
        const current = event.resultIndex;

        if (event.results[current].isFinal) {
          return resolve(event.results[current][current].transcript);
        }
      };
    } catch (error) {
      return reject("Well, that's an unexpected ERROR " + error);
    }
  });
}
