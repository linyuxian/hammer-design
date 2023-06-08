import type { PropType } from "vue";
import "uno.css";

export type Color =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export const buttonprops = {
  // 按钮背景色
  color: {
    type: String as PropType<Color>,
    default: "blue", // 设定默认颜色
  },
  // 按钮图标
  icon: {
    type: String,
    default: "",
  },
};
