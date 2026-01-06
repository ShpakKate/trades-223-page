import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InlineSVGConfig } from 'ng-inline-svg-2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    // {
    //   provide: InlineSVGConfig,
    //   useValue: {
    //     baseUrl: '/assets/icons/'
    //   }
    // },
  ]
};
