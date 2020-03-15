import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SketchComponent } from '../app/sketch/sketch.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'sketch', component: SketchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
