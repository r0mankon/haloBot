import { getFetch } from "../helper";

export default async function duckDuckGo(query) {
  const data = await getFetch(
    `https://api.duckduckgo.com/?no_redirect=1&no_html=1&skip_disambig=1&q=${query}&format=json`
  );

  if (data.AbstractText !== "") {
    return data.AbstractText;
  } else if (
    data.RelatedTopics.length >= 3 &&
    typeof data.RelatedTopics[3].Topics !== undefined &&
    typeof data.RelatedTopics[3].Topics[0].Result !== undefined
  ) {
    // some weird thing going on here!
    let results;
    for (const topic of data.RelatedTopics[3].Topics) {
      results += `<p class='related-topic'>${topic.Result}</p>`;
    }

    // some more bullshit...
    // I was getting a 'undefined' in the above 'results'
    // I just filtered out the text 'undefined'!
    let filteredResults;
    if (results.includes("undefined")) {
      filteredResults = results.replace("undefined", "");
    }
    return `I have several answers for you...${filteredResults}`;
  } else {
    return "Sorry I can't get you.";
  }
}
