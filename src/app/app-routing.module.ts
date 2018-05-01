import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: './front-page/front-page.module#FrontPageModule',
    pathMatch: 'full',
  },
  { 
    path: 'blog', 
    loadChildren: './blog/blog.module#BlogModule',
  },
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule, ],
})
export class AppRoutingModule { }