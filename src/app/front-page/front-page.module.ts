import { NgModule } from '@angular/core';

// import { SharedModule } from "../shared/shared.module";
import { FrontPageComponent } from './front-page.component';
import { FrontPageRoutingModule } from './front-page-routing.module';

@NgModule({
  imports: [
    // SharedModule,
    FrontPageRoutingModule,
  ],
  exports: [],
  declarations: [
    FrontPageComponent,
  ],
  providers: [],
})
export class FrontPageModule { }
