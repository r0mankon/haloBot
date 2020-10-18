export function greet() {
  const greetings = [
    "Hi, What can I do for you?",
    "Welcome Back, How are you doing?",
    "What's up?",
    "How can I help you, Sir?",
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}
