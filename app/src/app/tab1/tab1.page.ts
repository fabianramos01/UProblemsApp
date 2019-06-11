import { Component } from '@angular/core';
import { ServiceDbService } from './service-db.service';
import { Publication } from '../models/publication';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  publications: Publication[];

  constructor(private servicedb: ServiceDbService) {}

  ngOnInit(): void {
    this.loadPublications();    
  }

  loadPublications() {
    this.servicedb.loadPublications()
    .subscribe(res => {
      console.log(res);
      this.publications = res;
    });
  }
}