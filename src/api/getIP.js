import { getFetch } from "../lib/utils";
import { ipee } from "./config.json";

export async function getIP() {
  try {
    const { publicIP } = await getFetch(ipee.base_url);

    return `Your public IP address is
               <h2>${publicIP}<h2>`;
  } catch (error) {
    return error;
  }
}
