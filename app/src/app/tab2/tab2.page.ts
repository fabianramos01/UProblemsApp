import { Component } from '@angular/core';
import { ServiceDbService } from '../tab1/service-db.service';
import { Publication } from '../models/publication';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title: string;
  description: string;

  constructor(private serviceDb: ServiceDbService) {}

  sendPublication() {
    // new Date();
    let publication:Publication;
    publication.title = this.title;
    publication.description = this.description;
    this.serviceDb.sendPublication(publication);
  }
}