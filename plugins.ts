import "lume/types.ts";
import base_path from "lume/plugins/base_path.ts";
import nav from "lume/plugins/nav.ts";
import esbuild from "lume/plugins/esbuild.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import minify_html from "lume/plugins/minify_html.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import simple_icons from "lume/icons/simpleicons.ts";
import hero_icons from "lume/icons/heroicons.ts";
import date from "lume/plugins/date.ts";
import { es } from "npm:date-fns/locale/es";

export default function () {
  return (site: Lume.Site) => {
    site
      .use(base_path())
      .use(nav())
      .use(esbuild())
      .use(lightningcss())
      .use(minify_html())
      .use(resolve_urls())
      .use(simple_icons())
      .use(hero_icons())
      .use(
        date({
          locales: { es },
        })
      );
  };
}
