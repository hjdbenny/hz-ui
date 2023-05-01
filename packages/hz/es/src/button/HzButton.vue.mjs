import { defineComponent as e, openBlock as u, createElementBlock as s, normalizeClass as l, unref as p, renderSlot as c } from "vue";
import { computed as a } from "vue-demi";
import "./style/index.css";
const m = e({ name: "hz-button" }), i = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = a(() => ({ [`hz-button--${t.type}`]: t.type }));
    return (r, f) => (u(), s("button", {
      class: l(["hz-button", p(n)])
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
