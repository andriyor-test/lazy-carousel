import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CarouselComponent, CarouselItemElementDirective } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { DateFnsPipe } from './pipes/date-fns.pipe';
import { CarouselLazyComponent } from './carousel-lazy/carousel-lazy.component';
import { LazyImageComponent } from './lazy-image/lazy-image.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, HttpClientModule ],
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    DateFnsPipe,
    CarouselLazyComponent,
    LazyImageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
