import 'normalize.css';
import { createPinia } from 'pinia';

import './assets/styles/style.css';
import 'uno.css';
const pinia = createPinia();
import router from './router';
import { setupMock } from './mock';

import App from './App.vue';

if (import.meta.env.VITE_USE_MOCK === 'true') {
  setupMock();
}

createApp(App).use(router).use(pinia).mount('#app');
