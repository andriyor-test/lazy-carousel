import {Directive, Input, HostBinding} from '@angular/core'
@Directive({
  selector: 'img',
  host: {
    '(error)': 'updateUrl()',
    '[src]': 'src'
  }
})

export class ImagePreloadDirective {
  @Input() src: string;
  @HostBinding('class') className;

  updateUrl() {
    this.src = 'https://via.placeholder.com/900x500.png';
  }
}
