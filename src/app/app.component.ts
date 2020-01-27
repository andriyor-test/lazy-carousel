import { Component } from '@angular/core';
import { items } from './items';
import {Item} from './models/item'

@Component({
  selector: 'app-carousel',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items: Item[] = items;

}
