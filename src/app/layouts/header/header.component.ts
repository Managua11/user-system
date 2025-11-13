import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink],
})
export class HeaderComponent {
  public title = 'UserSystem';
  public currentTime = new Date();
}
