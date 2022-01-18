import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopCollectionsPageRoutingModule } from './top-collections-routing.module';

import { TopCollectionsPage } from './top-collections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopCollectionsPageRoutingModule
  ],
  declarations: [TopCollectionsPage]
})
export class TopCollectionsPageModule {}
