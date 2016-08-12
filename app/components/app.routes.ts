import { provideRouter, RouterConfig }  from '@angular/router';

import {MainComponent} from './main/main.component';
import {WebComponent} from './web/web.component';
import {DocComponent} from './doc/doc.component';
import {SettingComponent} from './setting/setting.component';
import {AboutComponent} from './about/about.component';

const routes: RouterConfig = [
  {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
  },
  {
      path: '#',
      redirectTo: 'main',
  },
  {
      path: 'main',
      // name: 'Main',
      component: MainComponent,
      // useAsDefault: true
  },
  {
      path: 'web',
      component: WebComponent,
  },
  {
      path: 'doc',
      component: DocComponent,
  },
  {
      path: 'setting',
      component: SettingComponent,
  },
  {
      path: 'about',
      component: AboutComponent,
  }
];

export const AppRouterProviders = [
  provideRouter(routes)
];



