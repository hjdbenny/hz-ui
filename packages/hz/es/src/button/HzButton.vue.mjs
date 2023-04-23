import { defineComponent as e, computed as l, openBlock as s, createElementBlock as u, normalizeClass as c, unref as p, renderSlot as a } from "vue";
import "./style/index.scss.mjs";
const m = e({ name: "hz-button" }), d = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o;
    console.log(111);
    const n = l(() => ({ [`hz-button--${t.type}`]: t.type }));
    return (r, f) => (s(), u("button", {
      class: c(["hz-button", p(n)])
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
