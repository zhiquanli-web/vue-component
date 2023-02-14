import { App } from 'vue';
import SyDropDown from './src/dropdown.vue';

SyDropDown.install = (App: App) => {
  App.component(SyDropDown.name, SyDropDown);
};
export default SyDropDown;
