import type { App } from 'vue';
import directiveList from '@/directives';

export default function directives(app: App): void {
  for (const direct of directiveList) {
    app.directive(direct.name, direct.directive);
  }
}
