import { provideRouter, RouterConfig }  from '@angular/router';

import {MainComponent} from './main/main.component';
import {WebComponent} from './web/web.component';
import {DocComponent} from './doc/doc.component';
import {SettingComponent} from './setting/setting.component';
import {AboutComponent} from './about/about.component';

import {WordComponent} from './word/word.component';
import {WordDetailComponent} from './word/word-detail/word-detail.component';
import {WordEditComponent} from './word/word-edit/word-edit.component';
import {WordNewComponent} from './word/word-new/word-new.component';

const routes: RouterConfig = [
  {
      path: '',
      component: MainComponent,
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
      path: 'setting',
      component: SettingComponent,
  },
  {
      path: 'words',
      component: WordComponent,
  },
  {
      path: 'word/detail/:id',
      component: WordDetailComponent,
  },
  {
      path: 'word/edit/:id',
      component: WordEditComponent,
  },
  {
      path: 'word/new',
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



