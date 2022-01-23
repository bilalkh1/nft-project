import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CollectionModalComponent } from 'src/app/shared/modals/collection-modal/collection-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  onCollection() {
    this.modalController.create({ component: CollectionModalComponent })
    .then((modalEl) => {
      modalEl.present();
    });
  }

}
