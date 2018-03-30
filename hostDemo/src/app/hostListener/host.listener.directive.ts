import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[counting]'
})
export class HostListenerDirective {
  numberOfClicks = 0;

  @HostBinding('attr.role1') role1 = 'button1111';

  @HostListener('click', ['$event.target'])
  onClick(btn: HTMLElement) {
      console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }

}
