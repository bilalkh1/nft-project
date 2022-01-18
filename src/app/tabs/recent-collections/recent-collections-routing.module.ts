import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentCollectionsPage } from './recent-collections.page';

const routes: Routes = [
  {
    path: '',
    component: RecentCollectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentCollectionsPageRoutingModule {}
