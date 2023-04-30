import * as o from "./src/index.mjs";
import { HzButton as i } from "./src/button/index.mjs";
const e = {
  install: (t) => {
    for (const n in o)
      t.use(o[n]);
  }
};
export {
  i as HzButton,
  e as default
};
