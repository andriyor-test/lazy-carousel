import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Item } from '../../models/item';
import { DateMode } from '../../models/types';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from '@angular/animations';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-carousel-lazy',
  templateUrl: './carousel-lazy.component.html',
  styleUrls: ['./carousel-lazy.component.css']
})
export class CarouselLazyComponent implements OnInit {
  @Input() items: Item[];
  @ViewChild('carousel', { static: true }) private carousel: ElementRef;
  private currentSlide = 0;
  private currentPage = 1;
  private player: AnimationPlayer;
  private itemWidth =  900;
  modeKeys = Object.keys(DateMode);

  constructor(
    private builder: AnimationBuilder,
    private imageService: ImageService
  ) { }

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

    if (this.currentSlide % 9 === 0) {
      this.currentPage += 1;
      this.imageService.getImages(this.currentPage).subscribe(items => {
        this.items = [...this.items, ...items];
      });
    }

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
