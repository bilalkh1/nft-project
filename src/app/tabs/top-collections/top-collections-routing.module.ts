import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopCollectionsPage } from './top-collections.page';

const routes: Routes = [
  {
    path: '',
    component: TopCollectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopCollectionsPageRoutingModule {}
