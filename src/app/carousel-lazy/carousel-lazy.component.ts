import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Item } from '../models/item';
import { DateMode } from '../models/types';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from '@angular/animations';

@Component({
  selector: 'app-carousel-lazy',
  templateUrl: './carousel-lazy.component.html',
  styleUrls: ['./carousel-lazy.component.css']
})
export class CarouselLazyComponent implements OnInit {
  @Input() items: Item[];
  @ViewChild('carousel', { static: true }) private carousel: ElementRef;
  private currentSlide = 0;
  private player: AnimationPlayer;
  private itemWidth =  900;

  constructor(private builder: AnimationBuilder ) { }

  ngOnInit() {
  }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate('250ms ease-in', style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  next() {
    if ( this.currentSlide + 1 === this.items.length ) { return; }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;

    const modeKeys = Object.keys(DateMode);
    const randomMode = modeKeys[Math.floor(Math.random() * modeKeys.length)];
    const randomImageIndex = this.getRandomInt(1, 150);
    this.items.push({
      title: Date.now(),
      mode: DateMode[randomMode],
      src: `https://picsum.photos/id/${randomImageIndex}/900/500`
    });

    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  prev() {
    if (this.currentSlide === 0 ) { return; }
    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    this.items.pop();

    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
}
