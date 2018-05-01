import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontPageModule } from './front-page/front-page.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-bmc-theme' }),
    CoreModule,
    AppRoutingModule,
    FrontPageModule,
    BlogModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}