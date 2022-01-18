import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCollectionsPageRoutingModule } from './all-collections-routing.module';

import { AllCollectionsPage } from './all-collections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCollectionsPageRoutingModule
  ],
  declarations: [AllCollectionsPage]
})
export class AllCollectionsPageModule {}
