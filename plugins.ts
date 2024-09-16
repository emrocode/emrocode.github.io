import base_path from "lume/plugins/base_path.ts";
import esbuild from "lume/plugins/esbuild.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import minify_html from "lume/plugins/minify_html.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import simple_icons from "lume/icons/simpleicons.ts";
import date from "lume/plugins/date.ts";
import { es } from "npm:date-fns/locale/es";

import { type Site } from "lume/types.ts";

export default function () {
  return (site: Site) => {
    site
      .use(base_path())
      .use(esbuild())
      .use(lightningcss())
      .use(minify_html())
      .use(resolve_urls())
      .use(simple_icons())
      .use(
        date({
          locales: { es },
        })
      );
  };
}
