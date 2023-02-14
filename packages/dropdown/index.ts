import { App } from 'vue';
import SyDropdown from './src/dropdown.vue';

SyDropdown.install = (App: App) => {
  App.component(SyDropdown.name, SyDropdown);
};
export default SyDropdown;
