import { AllCollectionsService } from './../../shared/services/all-collections.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-collections',
  templateUrl: './top-collections.page.html',
  styleUrls: ['./top-collections.page.scss'],
})
export class TopCollectionsPage implements OnInit {

  constructor(private allCollectionsService: AllCollectionsService) { }

  ngOnInit() {
    this.allCollectionsService.getKMeansCollections()
    .subscribe((collections) => {
      console.log(collections);
    }, (err) => {
      console.log(err);
    })
  }

}
