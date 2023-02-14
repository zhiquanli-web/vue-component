import { App } from 'vue';
import SyDropdown from './dropdown';
import SyMenu from './menu';
import SyMenuItem from './menuItem';
import SyMoveList from './moveList';

// 按需引入
export { SyDropdown, SyMenu, SyMenuItem, SyMoveList };

const components = [SyDropdown, SyMenu, SyMenuItem, SyMoveList];

const install = (App: App) => {
  components.forEach((item: any) => {
    App.component(item.name, item);
  });
};

export default {
  install
};
