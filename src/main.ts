import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
      // Before restarting the app, we create a new root element and dispose the old one
      const oldRootElem = document.querySelector('app');
      const newRootElem = document.createElement('app');
      oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
      const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule)
                                                    .then(appModule => appModule.destroy());
  });
} else {
  enableProdMode();
  const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/wp-content/themes/ng-bmc-theme/dist/sw.js', { scope: './' }).then(registration => {
          console.log('SW registered: ', registration);
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  });
}