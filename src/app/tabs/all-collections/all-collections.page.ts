import { AllCollectionsService } from './../../shared/services/all-collections.service';
import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/shared/models/Collection';

@Component({
  selector: 'app-all-collections',
  templateUrl: './all-collections.page.html',
  styleUrls: ['./all-collections.page.scss'],
})
export class AllCollectionsPage implements OnInit {
  collections: Collection[] = [];
  page = 1;
  limit = 10;
  constructor(private allCollectionsService: AllCollectionsService) { }

  ngOnInit() {
    this.getCollections(false, "");
  }

  getCollections(isFirstLoad: boolean, event) {
    this.allCollectionsService.getAllCollections(this.page, this.limit).subscribe((collections: Collection[]) => {
      console.log(collections);
      this.collections.push(...collections);
      console.log(this.collections.length);
      console.log(this.page);

      if (isFirstLoad) {
        console.log(event.target);
        event.target.complete();
        this.page++;
      }
      if (this.page == 1) {
        this.page++;
      }
    }, (err) => {
      console.log(err);
      event.target.complete();
    });
  }

  doInfinite(event) {
    this.getCollections(true, event);
  }

}
