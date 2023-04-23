import * as t from "./src/index.mjs";
import { HzButton as s } from "./src/button/index.mjs";
const n = {
  install: (o) => {
    for (let e in t)
      o.use(t[e]);
  }
};
export {
  s as HzButton,
  n as default
};
