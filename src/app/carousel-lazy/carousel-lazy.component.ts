import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Item } from '../models/item';
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

  next() {
    if ( this.currentSlide + 1 === this.items.length ) {
      this.currentSlide = 0
    } else {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
    }

    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  prev() {
    if ( this.currentSlide === 0 ) {
      this.currentSlide = this.items.length - 1;
    } else {
      this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    }

    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
}
