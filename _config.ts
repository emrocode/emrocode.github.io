import "jsr:@std/dotenv/load";
import lume from "lume/mod.ts";
import plugins from "./plugins.ts";
import { type Page } from "lume/types.ts";

const site = lume({
  src: "./src",
  dest: "./dist",
  location: new URL(Deno.env.get("BASE_URL")),
});

site
  .use(plugins())
  .copy("assets", ".")
  .remoteFile(Deno.env.get("REMOTE_FILE_ID"), Deno.env.get("REMOTE_FILE_URL"))
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
