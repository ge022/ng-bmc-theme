// Nonsingleton's to be shared 
// with feature modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms';

// import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
})
export class SharedModule {
  constructor() {
    console.log('SharedModule loaded!');
    
  }
 }