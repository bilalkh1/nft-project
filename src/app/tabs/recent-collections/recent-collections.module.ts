import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentCollectionsPageRoutingModule } from './recent-collections-routing.module';

import { RecentCollectionsPage } from './recent-collections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentCollectionsPageRoutingModule
  ],
  declarations: [RecentCollectionsPage]
})
export class RecentCollectionsPageModule {}
