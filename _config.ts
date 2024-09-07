import lume from "lume/mod.ts";
import plugins from "./plugins.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import { type Page } from "lume/types.ts";

const env = await load();

const site = lume({
  src: "./src",
  dest: "./dist",
  location: new URL(env["BASE_URL"]),
});

site
  .use(plugins())
  .copy("assets", ".")
  .remoteFile(env["REMOTE_FILE_ID"], env["REMOTE_FILE_URL"])
  .process([".html"], (pages: Page) => {
    for (const page of pages) {
      const externalLinks = page.document.querySelectorAll('a[href^="http"], a[href^="mailto:"]');
      externalLinks.forEach((link: HTMLAnchorElement) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    }
  });

export default site;
