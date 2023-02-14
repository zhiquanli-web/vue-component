import 'normalize.css';
import { createPinia } from 'pinia';

import './assets/styles/style.css';
import 'uno.css';
import SyComponent from '../packages';

const pinia = createPinia();
import router from './router';

import App from './App.vue';

createApp(App).use(router).use(SyComponent).use(pinia).mount('#app');
