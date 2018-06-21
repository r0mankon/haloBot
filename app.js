// Enter key to send
document.querySelector('input').addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

// Commands
var hi = ['hi', 'hello', 'helo', 'hey', 'hiya', 'ho', 'yo', 'h', 'hey '];
var time = ['time', 'what time is it', 'tell the time', 'the time'];
var date = ['date', 'the date', 'tell the date', 'what date', 'what date today'];
var month = ['month', 'the month', 'month name', 'name of the month'];
var myName = ['name', 'what is my name', 'my name'];
var howAreYou = ['how are you', 'how you', 'how', 'how r you'];
var whoAreYou = ['who are you', 'who'];
var whatIsBot = ['bot', 'what is bot'];
var whatDoing = ['what am i doing', 'what am i doing now', 'what i am doing'];
var bored = ['I\'m bored', 'I am bored', 'bored', 'bore', 'I feeling boredom'];
var joke = ['joke', 'jokes', 'tell a joke', 'tell me joke', 'tell me a joke'];
var favMemory = ['what is your favorite memory', 'favorite memory', 'favorit memory'];
var developer = ['developer', 'coder', 'designer', 'who is your coder', 'who is your developer'];
var rokon = ['rokon', 'who is rokon'];
var thanks = ['thanks', 'thank', 'thank you'];
var bye = ['bye', 'good bye'];

var button = document.getElementById('btn');
var res; // bot response
var i;

button.addEventListener('click', bot);

function bot() {
  // Converting input to lowercase
  var input = document.getElementById('input').value.toLowerCase();

  // Prevent submit if input is null
  if (input == '') {
    return false;
  }

  // shortcut function for bot response
  // array = command array
  // textToReply = bot reply on command array
  function reply(array, textToReply) {
    for (i = 0; i <= array.length; i++) {
      if (input == array[i]) {
        res = textToReply;
      }
    }
  }

  reply(hi, 'Hi, What can I do for you ?');
  reply(time, showTime());
  reply(date, showDate());
  reply(month, monthName());
  reply(myName, 'You know your name');
  reply(howAreYou, 'I am doing great. Thanks for asking');
  reply(whoAreYou, 'I\'m your Personal Assistant! There are a lot of things I know, and even more things I\'m excited to learn about!');
  reply(whatIsBot, 'An Internet Bot, also known as web robot, or simply bot, is a software application that runs automated tasks over the Internet');
  reply(whatDoing, 'You are talking to me');
  reply(bored, 'I can tell you a joke, or you can play a game');
  reply(joke, 'Did you hear about the two thieves who stole a calender? They each got 6 months');
  reply(favMemory, 'One of my favorites, The first time we met!');
  reply(developer, 'Rokon');
  reply(rokon, 'Visit here to know about rokon - http://rokon015.github.io');
  reply(thanks, 'You are Welcome');
  reply(bye, 'Good bye');

  function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    return 'It\'s ' + h + ':' + m;
  }

  function showDate() {
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    var date = "Today is " + dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' ' + monthName() + ', ' + newDate.getFullYear();

    return date;
  }

  function monthName() {
    var date = new Date();
    var m = date.getMonth();
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var theMonth = monthNames[m];

    return theMonth;
  }

  // Building Output
  var messages = document.getElementById('messages');
  // showing user input
  var userNode = document.createElement('h1');
  userNode.setAttribute('id', 'userInput');
  var userTextNode = document.createTextNode('You: ' + input);
  userNode.appendChild(userTextNode);
  messages.insertBefore(userNode, messages.childNodes[0]);

  // showing bot reply
  var node = document.createElement('h1');
  node.setAttribute('id', 'botSpeak');
  var textnode = document.createTextNode(res);
  node.appendChild(textnode);
  messages.insertBefore(node, messages.childNodes[0]);

  // Reseting input
  document.getElementById('my_form').reset();

  // Envoking voice function
  voice();
} // bot function end

// Voice System
function voice() {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0];
  msg.voiceURI = 'native';
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 2;
  msg.text = res;
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}