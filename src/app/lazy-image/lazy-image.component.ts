import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../models/item';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input() item: Item;
  @Input() isCurrent: Boolean;
  placeholderURL = 'https://via.placeholder.com/900x500.png';

  constructor() { }

  ngOnInit() {
  }

}
