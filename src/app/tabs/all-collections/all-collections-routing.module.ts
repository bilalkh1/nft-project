import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCollectionsPage } from './all-collections.page';

const routes: Routes = [
  {
    path: '',
    component: AllCollectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCollectionsPageRoutingModule {}
