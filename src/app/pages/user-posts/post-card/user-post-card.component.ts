import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../models/posts.model';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  templateUrl: './user-post-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CardModule]
})
export class PostCardComponent {
  @Input() post: Post;

  @Output() onDetails = new EventEmitter<void>();
}
