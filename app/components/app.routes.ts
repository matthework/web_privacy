import { provideRouter, RouterConfig }  from '@angular/router';

import {MainComponent} from './main/main.component';
import {WebComponent} from './web/web.component';
import {DocComponent} from './doc/doc.component';
import {OptionsComponent} from './options/options.component';
import {AboutComponent} from './about/about.component';

import {WordComponent} from './word/word.component';
import {WordEditComponent} from './word/word-edit/word-edit.component';
import {WordNewComponent} from './word/word-new/word-new.component';

const routes: RouterConfig = [
  {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
  },
  {
      path: 'main',
      component: MainComponent,
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
      path: 'options',
      component: OptionsComponent,
  },
  {
      path: 'keywords',
      component: WordComponent,
  },
  {
      path: 'keyword/edit/:id',
      component: WordEditComponent,
  },
  {
      path: 'keyword/new',
      component: WordNewComponent,
  },
  {
      path: 'about',
      component: AboutComponent,
  }
];

export const AppRouterProviders = [
  provideRouter(routes)
];



