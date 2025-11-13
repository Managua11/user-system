import { Pipe, PipeTransform } from '@angular/core';
import { FilterType, LeaderboardItem } from '../utils/model';

@Pipe({
  name: 'filterByWeek',
  standalone: true
})
export class FilterByWeekPipe implements PipeTransform {

  transform(data: LeaderboardItem[], filterBy: FilterType): LeaderboardItem[] {
    return filterBy === 'All' ? data : data.filter(res => res.week === filterBy)
  }

}
