import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SketchComponent } from '../app/sketch/sketch.component';
import { IndexComponent } from './index/index.component';
import { SvgComponent } from './svg/svg.component';
import { MainContentComponent } from './main-content/main-content.component';
import { Page404Component } from './page404/page404.component';
import { DrawPanelComponent } from "./draw-panel/draw-panel.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  { path: 'main', component: MainContentComponent },
  { path: 'index', component: IndexComponent },
  { path: 'drowPanel', component: DrawPanelComponent },
  //{ path: 'sketch', component: SketchComponent },
  {
    path: 'svg', component: SvgComponent,
    children: [
      { path: 'sketch', component: SketchComponent },

    ]
  },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
