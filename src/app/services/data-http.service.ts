import { Injectable } from '@angular/core';
import { finalize, map, Observable, of, switchMap } from 'rxjs';
import { LoadingStateService } from './loading-state.service';
import { User } from '../models/users.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Post, PostWithUserName } from '../models/posts.model';
import { TodoListItem } from '../models/todo-list.model';

@Injectable()
export class DataHttpService {
  constructor(
    private loadingStateService: LoadingStateService,
    private httpClient: HttpClient,
  ) { }

  public getUsers(searchValue?: string): Observable<User[]> {
    this.loadingStateService.loading = true;

    return this.httpClient.get<User[]>(`${environment.typicodeBaseUrl}/users`).pipe(
      map(users => {
        return !searchValue ?
          users
          :
          users.filter(user =>
            user.name.toLowerCase().includes(searchValue) ||
            user.username.toLowerCase().includes(searchValue) ||
            user.email.toLowerCase().includes(searchValue) ||
            user.phone.toLowerCase().includes(searchValue) ||
            user.company.name.toLowerCase().includes(searchValue)
          )
      }),
      finalize(() => this.loadingStateService.loading = false)
    )
  }

  public getPosts(queryParams?: Record<string, string | number | boolean>, withUserName?: boolean): Observable<(PostWithUserName | Post)[]> {
    this.loadingStateService.loading = true;

    let params = new HttpParams();
    if (queryParams) {
      Object.keys(queryParams).forEach(key => {
        params = params.set(key, queryParams[key]);
      })
    }

    return this.httpClient.get<Post[]>(`${environment.typicodeBaseUrl}/posts`, {
      params
    }).pipe(
      switchMap(posts =>
        !withUserName ? of(posts) : this.httpClient.get<User[]>(`${environment.typicodeBaseUrl}/users`).pipe(
          map(users => posts.map(post => ({
            ...post,
            userName: users.find(user => user.id === post.userId)?.name || '',
          })))
        )
      ),
      finalize(() => this.loadingStateService.loading = false)
    );
  }

  // public getPostsWithUserName(userId: number): Observable<PostWithUserName[]> {
  //   this.loadingStateService.loading = true;

  //   return this.httpClient.get<Post[]>(`${environment.typicodeBaseUrl}/posts?userId=${userId}`).pipe(
  //     switchMap(posts => this.httpClient.get<User[]>(`${environment.typicodeBaseUrl}/users?id=${userId}`).pipe(
  //       map(users => posts.map(post => ({ ...post, userName: users[0].name })))
  //     )),
  //     finalize(() => this.loadingStateService.loading = false)
  //   )
  // }

  // public getAllPosts(): Observable<Post[]> {
  //   this.loadingStateService.loading = true;

  //   return this.httpClient.get<Post[]>(`${environment.typicodeBaseUrl}/posts`).pipe(
  //     finalize(() => this.loadingStateService.loading = false)
  //   )
  // }

  public getUserTodoList(userId: number): Observable<TodoListItem[]> {
    this.loadingStateService.loading = true;
    return this.httpClient.get<TodoListItem[]>(`${environment.typicodeBaseUrl}/todos?userId=${userId}`).pipe(
      finalize(() => this.loadingStateService.loading = false)
    )
  }

}
