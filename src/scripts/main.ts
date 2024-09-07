import Darkify from "npm:darkify-js";

const dMode = new Darkify("button#dTheme", {
  useColorScheme: ["#ffffff", "#111111"],
});

console.table(dMode.options);
