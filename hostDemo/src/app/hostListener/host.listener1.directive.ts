import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[counting]',
  host: {
    'role': 'button',
    '(click)': 'onClick($event.target)'
  }
})
export class HostListener1Directive {
  numberOfClicks = 0;

  @HostBinding('attr.role') role = 'button';

  onClick(btn: HTMLElement) {
      console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }

  

}
