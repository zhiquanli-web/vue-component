import { App } from 'vue';
import SyMoveList from './src/moveList.vue';

SyMoveList.install = (App: App) => {
  App.component(SyMoveList.name, SyMoveList);
};

export default SyMoveList;
