import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';
import { TodoListItem } from '../../models/todo-list.model';
import { DataHttpService } from '../../services/data-http.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TableModule, HttpClientModule],
  providers: [DataHttpService]
})
export class TodoListComponent implements OnInit {
  public todoList$: Observable<TodoListItem[]>;

  private userId;

  public headers = [
    'Id',
    'Title',
    'Status',
  ];

  constructor(
    private dataHttpService: DataHttpService,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.initTodoList();
  }

  private initTodoList() {
    this.todoList$ = this.dataHttpService.getUserTodoList(this.userId)
  }

}
