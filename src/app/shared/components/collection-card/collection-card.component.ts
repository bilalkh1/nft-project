import { CollectionModalComponent } from './../../modals/collection-modal/collection-modal.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.scss'],
})
export class CollectionCardComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onCollection() {
    this.modalController.create({ component: CollectionModalComponent })
    .then((modalEl) => {
      modalEl.present();
    });
  }

}
