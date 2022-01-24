import { CollectionModalComponent } from './../../modals/collection-modal/collection-modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Collection } from '../../models/Collection';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {
  @Input() collection: any;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onCollection() {
    this.modalController.create({ component: CollectionModalComponent, componentProps: { collection: this.collection } })
    .then((modalEl) => {
      modalEl.present();
    });
  }

}
