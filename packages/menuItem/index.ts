import { App } from 'vue';
import SyMenuItem from './src/menuItem.vue';

SyMenuItem.install = (App: App) => {
  App.component(SyMenuItem.name, SyMenuItem);
};

export default SyMenuItem;
