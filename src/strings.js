import { name } from "../public/manifest.json";
import { version, bugs } from "../package.json";

export default {
  app_name: name,
  version,
  bugs: bugs.url,
};
