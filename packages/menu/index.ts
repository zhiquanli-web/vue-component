import { App } from 'vue';
import SyMenu from './src/menu.vue';

SyMenu.install = (App: App) => {
  App.component(SyMenu.name, SyMenu);
};

export default SyMenu;
