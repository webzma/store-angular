import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  element = inject(ElementRef);

  constructor() {}

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#000';
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.fontWeight = 'bold';
  }
}
