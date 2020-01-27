import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CarouselComponent, CarouselItemElement } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { DateFnsPipe } from './pipes/date-fns.pipe';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, CarouselComponent, CarouselItemDirective, CarouselItemElement, DateFnsPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
