import { getFetch } from "../lib/utils";
import { duckDuckGo as ddg } from "./config.json";

export async function getDDG(query) {
  try {
    /** @type {String} */
    let results;

    const response = await getFetch(
      ddg.proxy + `${ddg.base_url}/?no_redirect=1&q=${query}&format=json&t=haloBot`
    );

    if (!response.meta) {
      return `I can't handle the truth of <b>${query}</b>. Try with different keywords.`;
    }

    const { AbstractText, RelatedTopics } = await response;

    if (AbstractText) return AbstractText;

    if (query.includes("bot")) {
      for (const topic of RelatedTopics[3].Topics) {
        results += `<p class='related-topic'>${topic.Result}</p>`;
      }
    }

    if (typeof RelatedTopics !== "symbol") {
      for (const RelatedTopic of RelatedTopics) {
        results += `<p class='related-topic'>${RelatedTopic.Result}</p>`;

        if (RelatedTopics.Topics) {
          for (const topic of RelatedTopics.Topics) {
            results += `<p class='related-topic'>${topic.Result}</p>`;
          }
        }
      }
    }

    // magic 😎 don't try this at home!
    if (results.includes("undefined")) {
      results = results.replace(/undefined/gi, "");
    }

    return `Related topics for <b>${query}</b>...${results}`;
  } catch (error) {
    return error;
  }
}
