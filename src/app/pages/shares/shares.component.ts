import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WheelComponent } from './wheel/wheel.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, WheelComponent, LeaderBoardComponent],
})
export class SharesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
