import { RecentCollection, TopCollection } from './../../shared/models/Collection';
import { AllCollectionsService } from './../../shared/services/all-collections.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CollectionModalComponent } from 'src/app/shared/modals/collection-modal/collection-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  recentCollections:RecentCollection[];
  topCollections: TopCollection[];
  constructor(
    private modalController: ModalController,
    private collectionService: AllCollectionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.collectionService.getRecentCollections().subscribe((recentCollections: RecentCollection[]) => {
      this.recentCollections = recentCollections;
    }, (err) => {
      console.log(err);
    });

    this.collectionService.getTopCollections().subscribe((topCollections: RecentCollection[]) => {
      this.topCollections = topCollections;
    }, (err) => {
      console.log(err);
    });
  }

  onRecentCollections() {
    this.router.navigate(['/nft', 'recent-collections']);
  }

  onTopCollections() {
    this.router.navigate(['/nft', 'top-collections']);
  }

}
