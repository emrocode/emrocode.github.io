import "jsr:@std/dotenv/load";
import lume from "lume/mod.ts";
import plugins from "./plugins.ts";
import helpers from "./helpers.ts";
import { env } from "./utils.ts";
import "lume/types.ts";

const site = lume({
  src: "./src",
  dest: "./dist",
  location: new URL(env("BASE_URL")),
});

site
  .use(plugins())
  .use(helpers())
  .copy("assets", ".")
  .remoteFile(env("LOCAL_CSS_RESET_PATH"), env("REMOTE_CSS_RESET_URL"))
  .process([".html"], (pages) => {
    for (const page of pages) {
      const externalLinks = page?.document?.querySelectorAll(
        'a[href^="http"], a[href^="mailto:"]'
      );
      externalLinks?.forEach((anchor: Element) => {
        const link = anchor as HTMLAnchorElement;
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    }
  });

export default site;
