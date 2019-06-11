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
    let publication:Publication;
    publication = new Publication();
    let date = new Date();
    publication.date_publication = date.getDate() + "/" + (parseInt(date.getMonth() + "")+1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    publication.title = this.title;
    publication.description = this.description;
    publication.location_publication = "......";
    this.serviceDb.sendPublication(publication);
  }
}