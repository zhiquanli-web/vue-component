import { App } from 'vue';
import SyDropDown from './dropdown';
import SyMenu from './menu';
import SyMenuItem from './menuItem';
import SyMoveList from './moveList';

// 按需引入
export { SyDropDown, SyMenu, SyMenuItem, SyMoveList };

const components = [SyDropDown, SyMenu, SyMenuItem, SyMoveList];

const install = (App: App) => {
  components.forEach((item: any) => {
    App.component(item.name, item);
  });
};

export default {
  install
};
