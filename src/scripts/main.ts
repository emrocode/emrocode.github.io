import Darkify from "npm:darkify-js";

const dMode = new Darkify("button#dTheme", {
  useColorScheme: ["#f7f4e8", "#23211a"],
});

console.table(dMode.options);
