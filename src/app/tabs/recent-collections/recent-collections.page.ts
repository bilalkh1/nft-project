import { AllCollectionsService } from './../../shared/services/all-collections.service';
import { Component, OnInit } from '@angular/core';
import { RecentCollection, TopCollection } from 'src/app/shared/models/Collection';

@Component({
  selector: 'app-recent-collections',
  templateUrl: './recent-collections.page.html',
  styleUrls: ['./recent-collections.page.scss'],
})
export class RecentCollectionsPage implements OnInit {
  recentCollections: RecentCollection[];
  topCollections: TopCollection[];
  constructor(private collectionService: AllCollectionsService) { }

  ngOnInit() {
    this.collectionService.getRecentCollections().subscribe((recentCollections: RecentCollection[]) => {
      this.recentCollections = recentCollections;
    }, (err) => {
      console.log(err);
    });

    this.collectionService.getTopCollections().subscribe((topCollections: TopCollection[]) => {
      this.topCollections = topCollections;
    }, (err) => {
      console.log(err);
    });
  }

}
