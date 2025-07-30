import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output, DOCUMENT } from '@angular/core';
import { debounceTime, filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();

  documentClickSubscription: Subscription | undefined;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.documentClickSubscription = fromEvent(this.document, 'click')
        .pipe(
          debounceTime(10),
          filter((event) => !this.isInside(event.target as HTMLElement)),
        )
        .subscribe(() => {
          this.clickOutside.emit();
        });
    }, 0);
  }

  ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
  }

  isInside(elementToCheck: HTMLElement): boolean {
    return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck);
  }
}
