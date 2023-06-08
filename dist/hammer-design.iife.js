var HammerDesign = function(exports, vue) {
  "use strict";
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
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: buttonprops,
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass([
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
          props.icon ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 0,
            class: vue.normalizeClass(["p-3", `i-ic-baseline-${props.icon}`])
          }, null, 2)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  const entry = {
    install(app) {
      app.component(_sfc_main.name, _sfc_main);
    }
  };
  exports.HButton = _sfc_main;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
