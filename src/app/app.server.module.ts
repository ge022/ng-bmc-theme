import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  exports: [
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppServerModule {
  // constructor(
    // @Inject(PLATFORM_ID) private platformId: Object,
    // @Inject(APP_ID) private appId: string) {
    // const platform = isPlatformBrowser(platformId) ?
    //   'in the browser' : 'on the server';
    // console.log(`Running ${platform} with appId=${appId}`);
  // }
}