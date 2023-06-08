import { defineComponent, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot } from "vue";
const __uno = "";
const buttonprops = {
  // 按钮背景色
  color: {
    type: String,
    default: "blue"
    // 设定默认颜色
  },
  // 按钮图标
  icon: {
    type: String,
    default: ""
  }
};
const __default__ = {
  name: "HButton"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: buttonprops,
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          "py-2",
          "px-4",
          "font-semibold",
          "rounded-lg",
          "shadow-md",
          "text-white",
          `bg-${props.color}-500`,
          `hover:bg-${props.color}-700`,
          "border-none",
          "cursor-pointer"
        ])
      }, [
        props.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["p-3", `i-ic-baseline-${props.icon}`])
        }, null, 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const entry = {
  install(app) {
    app.component(_sfc_main.name, _sfc_main);
  }
};
export {
  _sfc_main as HButton,
  entry as default
};
