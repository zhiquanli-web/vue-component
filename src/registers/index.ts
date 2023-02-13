import type { App } from 'vue';

import properties from './properties';
import directives from './directives';

export function globalRegister(app: App): void {
  app.use(properties);
  app.use(directives);
}
