import { createApp } from "vue";

import HammerDesign from "./entry";

createApp({
  template: `
        <div>
        <HButton color="blue">蓝色按钮</HButton>
        <HButton color="green">绿色按钮</HButton>
        <HButton color="gray">灰色按钮</HButton>
        <HButton color="yellow">黄色按钮</HButton>
        <HButton color="red">红色按钮</HButton>

        <HButton color="blue" round plain icon="search" ></HButton>
         <HButton color="green" round plain icon="edit" ></HButton>
         <HButton color="gray" round plain icon="check" ></HButton>
         <HButton color="yellow" round plain icon="message" ></HButton>
         <HButton color="red" round plain icon="delete" ></HButton>
        </div>
    `,
})
  .use(HammerDesign)
  .mount("#app");
