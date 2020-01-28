import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
  selector: '.carousel-item-directive'
})
export class CarouselItemElementDirective {
}

@Component({
  selector: 'app-carousel-custom',
  exportAs: 'carousel-custom',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel', { static: true }) private carousel: ElementRef;
  private player: AnimationPlayer;
  private itemWidth =  900;
  private currentSlide = 0;

  constructor( private builder: AnimationBuilder ) {
  }

  ngAfterViewInit() {
    const element = this.itemsElements.first.nativeElement;
    this.setBackground(element.firstElementChild);
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
    this.loadNext();

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
    this.loadNext();

    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  setBackground(element) {
    const background = element.getAttribute('data-background');
    element.style.backgroundImage = `url(${background})`;
  }

  loadNext() {
    const element = this.itemsElements.toArray()[this.currentSlide].nativeElement.firstElementChild;
    this.setBackground(element);
  }

}
