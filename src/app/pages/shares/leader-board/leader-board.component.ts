import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilterType, LeaderboardItem, WeekType } from './utils/model';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { FilterByWeekPipe } from './pipes/filter-by-week.pipe';

const DATA_COUNT = 60;

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TableModule,
    Button,
    FilterByWeekPipe
  ],
})
export class LeaderBoardComponent implements OnInit {
  public title = 'Leader Board';

  public leaderboard: LeaderboardItem[];

  private allData: LeaderboardItem[];

  public weeks: FilterType[] = ["All", "I", "II", "III", "IV",];

  public filter: FilterType = "All";

  public headers = [
    'CustomerId',
    'LoginName',
    'Place',
    'Week'
  ];

  constructor() { }

  ngOnInit() {
    this.initLeaderboard();
  }

  private initLeaderboard() {
    this.allData = this.generateLeaderboard(DATA_COUNT);
    this.leaderboard = this.allData;
  }

  private generateLeaderboard(count: number): LeaderboardItem[] {
    const leaderboard: LeaderboardItem[] = [];
    for (let i = 0; i < count; i++) {
      leaderboard.push({
        customerId: this.getRandomInt(1000, 9999),
        loginName: this.getRandomString(6),
        place: i + 1,
        week: this.getRandomWeek()
      });
    }
    return leaderboard;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getRandomString(length: number): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  private getRandomWeek(): WeekType {
    const weeks: WeekType[] = ["I", "II", "III", "IV"];
    return weeks[Math.floor(Math.random() * weeks.length)];
  }
}
