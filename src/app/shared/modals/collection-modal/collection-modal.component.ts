import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Collection } from '../../models/Collection';

@Component({
  selector: 'app-collection-modal',
  templateUrl: './collection-modal.component.html',
  styleUrls: ['./collection-modal.component.scss'],
})
export class CollectionModalComponent implements OnInit {
  @Input() collection: Collection;
  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  closeModal(): void {
    this.modalController.dismiss();
  }

}
