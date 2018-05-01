// Singleton's to be shared
// throughout the application
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
  ],
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
  ],
  providers: [],
})
export class CoreModule { 

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}