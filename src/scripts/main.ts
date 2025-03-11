import Darkify from "npm:darkify-js";
import ScrollReveal from "npm:scrollreveal";

const dMode = new Darkify("button#dTheme", {
  useColorScheme: ["#f7f4e8", "#23211a"],
});

console.table(dMode.options);

document.addEventListener("DOMContentLoaded", () => {
  const knowledgeBase = document.querySelectorAll(".skill");
  const sr = ScrollReveal();

  knowledgeBase.forEach((el, i) => {
    sr.reveal(el, {
      origin: "bottom",
      distance: "15px",
      duration: 500,
      delay: i * 200,
    });
  });
});
