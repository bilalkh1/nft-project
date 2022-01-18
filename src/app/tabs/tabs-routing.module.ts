import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'all-collections',
        loadChildren: () => import('./all-collections/all-collections.module').then( m => m.AllCollectionsPageModule)
      },
      {
        path: 'recent-collections',
        loadChildren: () => import('./recent-collections/recent-collections.module').then( m => m.RecentCollectionsPageModule)
      },
      {
        path: 'top-collections',
        loadChildren: () => import('./top-collections/top-collections.module').then( m => m.TopCollectionsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'nft/home',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
