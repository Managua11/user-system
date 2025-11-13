import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this.disableScroll()
  }

  public closeModal() {
    this.onClose.emit();
  }

  public stopEventBubbling(e: Event) {
    e.stopPropagation();
  }

  private disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  private enableScroll() {
    document.body.style.overflow = 'auto';
  }

  ngOnDestroy(): void {
    this.enableScroll();
  }
}
