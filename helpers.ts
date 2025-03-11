import "lume/types.ts";

export default function () {
  return (site: Lume.Site) => {
    site.filter("ms", (text: string) => {
      return text.replace(/\[/g, "<span>").replace(/\]/g, "</span>");
    });
  };
}
