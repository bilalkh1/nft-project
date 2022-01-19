import { CollectionModalComponent } from './modals/collection-modal/collection-modal.component';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CollectionCardComponent,
    CollectionModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CollectionCardComponent,
    CollectionModalComponent
  ]
})
export class SharedModule { }
