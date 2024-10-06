import "jsr:@std/dotenv/load";
import lume from "lume/mod.ts";
import plugins from "./plugins.ts";
import { env } from "./utils.ts";

const site = lume({
  src: "./src",
  dest: "./dist",
  location: new URL(env("BASE_URL")),
});

site
  .use(plugins())
  .copy("assets", ".")
  .remoteFile(env("REMOTE_FILE_ID"), env("REMOTE_FILE_URL"))
  .process([".html"], (pages) => {
    for (const page of pages) {
      const externalLinks = page?.document?.querySelectorAll('a[href^="http"], a[href^="mailto:"]');
      externalLinks?.forEach((anchor: Element) => {
        const link = anchor as HTMLAnchorElement;
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    }
  });

export default site;
