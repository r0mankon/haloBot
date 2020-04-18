import { getFetch } from "../helper";

export default async function getJokes() {
  const data = await getFetch("https://api.chucknorris.io/jokes/random");
  return await data.value;
}
