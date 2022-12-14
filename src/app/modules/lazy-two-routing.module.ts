import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyTwoComponent } from '../components/lazy-two/lazy-two.component';

const routes: Routes = [
  {
    path: '',
    component: LazyTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTwoRoutingModule { }
