import _HzButton from './HzButton.vue';
import type { App, Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => {
  (comp as any).install = (app: App) => {
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
export const HzButton = withInstall(_HzButton);
export default HzButton;
