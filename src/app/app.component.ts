import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  items = [
    { title: Date.now(), mode: 'short', src: 'https://picsum.photos/id/944/900/500' },
    { title: Date.now(), mode: 'medium', src: 'https://picsum.photos/id/1011/900/500' },
    { title: Date.now(), mode: 'fullDate', src: 'https://picsum.photos/id/984/900/500' },
    { title: Date.now(), mode: 'mm:ss', src: 'https://picsum.photos/id/985/900/500' },
  ];
}
