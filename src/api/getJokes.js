import { getFetch } from "../lib/utils";
import { chuckNorris } from "./config.json";

export async function getJokes() {
  try {
    const { value } = await getFetch(chuckNorris.base_url);

    return value;
  } catch (error) {
    return error;
  }
}
