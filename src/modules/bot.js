import { DateTime, flipCoin, getDDG, getJokes, getWeather, greet, textToSpeech } from ".";

const response_map = [
  {
    keyword: "hi hello hey ho",
    get response() {
      return greet();
    },
  },
  {
    keyword: "bye",
    response: "Good Bye",
  },
  {
    keyword: "thanks",
    response: "You are welcome!",
  },
  {
    keyword: "bored",
    response: "What can I do for you?",
  },
  {
    keyword: "time",
    response: DateTime.getTime(),
  },
  {
    keyword: "date",
    response: DateTime.getDate(),
  },
  {
    keyword: "month name",
    response: DateTime.getMonthName(),
  },
  {
    keyword: "jokes, tell me a joke",
    get response() {
      return getJokes();
    },
  },
  {
    keyword: "weather, temp, wind",
    get response() {
      return getWeather();
    },
  },
  {
    keyword: "flip a coin, flip coin",
    get response() {
      return flipCoin();
    },
  },
];

function getResponse(input) {
  let res;
  for (const obj of response_map) {
    const match = obj.keyword.includes(input.trim());

    if (match) {
      res = obj.response;
      break;
    }
    res = false;
  }
  return res;
}

export async function bot(input) {
  const res = getResponse(input);

  if (!res) {
    const ddg = await getDDG(input);
    return ddg;
  }

  return res;
}
