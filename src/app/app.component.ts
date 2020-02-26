import { Component, OnInit } from '@angular/core';
import {Item} from './models/item'
import {ImageService} from './services/image.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  items: Item[];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getImages(1).subscribe((images: Item[]) => {
      this.items = images;
    });
  }

}
