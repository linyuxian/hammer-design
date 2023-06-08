import BeeUI from "../../../src/entry";
import Theme from "vitepress/theme";
// 主题样式
import "vitepress-theme-demoblock/dist/theme/styles/index.css";

import { useComponents } from "./useComponents";

import "../styles/index.css";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(BeeUI);
    useComponents(app);
  },
};
