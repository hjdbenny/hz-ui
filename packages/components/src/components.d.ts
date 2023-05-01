/*
 * @Author: hjd
 * @Date: 2023-04-23 10:32:32
 * @LastEditors: hjd
 * @LastEditTime: 2023-05-01 16:23:02
 * @Description: 
 */
import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    HzButton: typeof components.Button;
  }
}
export {};