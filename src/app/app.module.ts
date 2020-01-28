import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CarouselComponent, CarouselItemElementDirective } from './components/carousel/carousel.component';
import { CarouselItemDirective } from './components/carousel/carousel-item.directive';
import { DateFnsPipe } from './pipes/date-fns.pipe';
import { CarouselLazyComponent } from './components/carousel-lazy/carousel-lazy.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { ImagePreloadDirective } from './components/lazy-image/lazy-image.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, HttpClientModule ],
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    ImagePreloadDirective,
    DateFnsPipe,
    CarouselLazyComponent,
    LazyImageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
