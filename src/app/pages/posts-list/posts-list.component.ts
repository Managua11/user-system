import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DataHttpService } from '../../services/data-http.service';
import { Observable } from 'rxjs';
import { PostWithUserName } from '../../models/posts.model';
import { Button } from "primeng/button";
import { PostDetailsCardComponent } from './post-details-card/user-post-details-card.component';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    Button,
    PostDetailsCardComponent,
    ModalComponent
  ],
  providers: [DataHttpService]
})
export class PostsListComponent implements OnInit {
  public posts$: Observable<PostWithUserName[]>;

  public openModal: boolean = false;

  public activePost: PostWithUserName | undefined;

  public headers = [
    'UserName',
    'Title',
    'Actions'
  ];

  constructor(private dataHttpService: DataHttpService) { }

  ngOnInit() {
    this.initPosts();
  }

  private initPosts() {
    this.posts$ = this.dataHttpService.getPosts(undefined, true) as Observable<PostWithUserName[]>
  }

  public openModalFn(post: PostWithUserName) {
    this.activePost = post;
    this.openModal = true;
  }

  public closeModalFn() {
    this.activePost = undefined;
    this.openModal = false;
  }
}
