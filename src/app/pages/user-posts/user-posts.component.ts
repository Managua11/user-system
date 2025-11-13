import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/posts.model';
import { DataHttpService } from '../../services/data-http.service';
import { PostCardComponent } from './post-card/user-post-card.component';
@Component({
  selector: 'app-posts',
  templateUrl: './user-posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HttpClientModule,
    PostCardComponent,
  ],
  providers: [DataHttpService]
})
export class PostsComponent implements OnInit {
  public posts$: Observable<Post[]>;

  public headers = [
    'User',
    'Post Title',
  ];

  constructor(
    private dataHttpService: DataHttpService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.initUsers();
  }

  private initUsers() {
    const params = { userId: this.route.snapshot.params['id'] }
    this.posts$ = this.dataHttpService.getPosts(params);
  }
}
