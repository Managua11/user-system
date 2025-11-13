import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Button } from "primeng/button";
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, Button, Toast],
  providers: [MessageService]
})
export class WheelComponent {
  public Math = Math;
  public pick = 1;
  public rotation = 0;

  constructor(private messageService: MessageService) { }

  public spin() {
    if (this.pick > 10 || this.pick < 1){
      return this.showError();
    }

    const n = Math.min(10, Math.max(1, Math.round(this.pick)));
    const angle = 36;
    const target = 5 * 360 - (n - 1) * angle - angle / 2;

    this.rotation = target;
  }

  public showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Sected area not found' });
  }
}
